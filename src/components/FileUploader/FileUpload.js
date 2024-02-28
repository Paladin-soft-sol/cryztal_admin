/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Grid } from '@mui/material';
import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';
import { CustomTypography } from '../Typography';
import './fileUpload.css';
/**
 * @param {*} props defines the prop
 * @name CustomFileUploader
 * @returns {React.ReactElement} return the FileUploader component
 */
export const CustomFileUploader = (props) => {
  const fileRef = useRef();
  const { fileType, Label, upLoad, getImage } = props;
  const [selectedImage, setSelectedImage] = useState();
  const [fileRemove, setFileRemove] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const image = 'image/png,image/jpeg/image/jpg';
  const docs = '.pdf';
  const [acceptType, setAcceptType] = useState('');
  const [imageupload, SetImageupload] = useState();

  console.log(uploadProgress, 'uploadProgress');
  // React.useEffect(() => {
  //   if (close === false) {
  //     setSelectedImage(false);
  //     setUploadProgress(0);
  //   }
  // }, [close]);
  /**
   * @name imageChange
   * @param {Event} e defines the event
   */

  /**
 * @name imageChange
 * @param {Event} e defines the event
 */
const imageChange = async (e) => {
  const file = e.target.files[0];
  
  // Check if the file size is within the allowed range
  const minSize = 10 * 1024; // 10 KB in bytes
  const maxSize = 1024 * 1024; // 1 MB in bytes

  if (file.size < minSize || file.size > maxSize) {
    // If the file size is not within the allowed range, handle the error
    console.error('File size should be between 10 KB and 1 MB.');
    return;
  }

  const arr = [];
  arr.push(file);
  e.preventDefault();
  SetImageupload(file);
  console.log(arr, 'arrsdsdsdf');
  
  const reader = new FileReader();
  const url = reader.readAsDataURL(file);
  reader.onloadstart = () => {
    setUploadProgress((prev) => {
      if (prev === 100) {
        return 0;
      }
      const diff = 30;
      return Math.min(prev + diff, 40);
    });
  };

  reader.onprogress = () => {
    setUploadProgress((prev) => {
      if (prev === 100) {
        return 0;
      }
      const diff = 30;
      return Math.min(prev + diff, 65);
    });
  };
  
  await getImage(arr);

  reader.onloadend = () => {
    setUploadProgress((prev) => {
      if (prev === 100) {
        return 0;
      }
      const diff = 45;
      return Math.min(prev + diff, 100);
    });
    setSelectedImage([reader.result]);
  };
  setAcceptType(fileType === 'image' ? image : docs);
};

  // const imageChange = async (e) => {
  //   const arr = [];
  //   arr.push(e.target.files[0]);
  //   e.preventDefault();
  //   SetImageupload(e.target.files[0]);
  //   console.log(arr, 'arrsdsdsdf');
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   // eslint-disable-next-line no-unused-vars
  //   const url = reader.readAsDataURL(file);
  //   reader.onloadstart = () => {
  //     setUploadProgress((prev) => {
  //       if (prev === 100) {
  //         return 0;
  //       }
  //       const diff = 30;
  //       return Math.min(prev + diff, 40);
  //     });
  //   };

  //   reader.onprogress = () => {
  //     setUploadProgress((prev) => {
  //       if (prev === 100) {
  //         return 0;
  //       }
  //       const diff = 30;
  //       return Math.min(prev + diff, 65);
  //     });
  //   };
  //   await getImage(arr);

  //   reader.onloadend = () => {
  //     setUploadProgress((prev) => {
  //       if (prev === 100) {
  //         return 0;
  //       }
  //       const diff = 45;
  //       return Math.min(prev + diff, 100);
  //     });
  //     setSelectedImage([reader.result]);
  //   };
  //   setAcceptType(fileType === 'image' ? image : docs);
  // };

  /**
   * @param {*} event defines the event that function
   * @name dragEvent
   */
  const dragEvent = (event) => {
    event.preventDefault();
  };
  /**
   * @name dropEvent
   */
  const dropEvent = () => {};
  /**
   *
   * @param {Event}e -- event
   */
  function deleteFile(e) {
    setSelectedImage();
    e.target.value = null;
  }
  return (
    <Grid className="root">
      <Grid
        container
        direction="row"
        item
        md={12}
        xs={12}
        className="CustomFileUploader"
      >
        <input
          type="file"
          className="fileUploader"
          onChange={imageChange}
          onDragOver={dragEvent}
          onDrop={dropEvent}
          accept={acceptType}
          ref={fileRef}
          hidden
        />
        <Grid
          onClick={() => fileRef.current.click()}
          className="uploadImageContainer"
        >
          <CustomTypography
            text={Label}
            type="caption"
            customStyle={{ color: '#f5f120' }}
          />
          <img src={upLoad} alt="upload" className="imageUpload" />
        </Grid>

        <div className="logo_image_size">
          <img
            src={fileType === 'image' && selectedImage}
            alt=""
            className={selectedImage ? 'logoImg' : 'none'}
          />
          <span
            className={selectedImage ? 'deleteImage' : 'none'}
            onClick={(e) => deleteFile(e)}
            aria-hidden
          >
            x
          </span>
        </div>
      </Grid>
    </Grid>
  );
};
export default CustomFileUploader;
CustomFileUploader.propTypes = {
  fileType: propTypes.string,
  Label: propTypes.string,
  upLoad: propTypes.string,
  getImage: propTypes.func
};
CustomFileUploader.defaultProps = {
  fileType: 'image',
  Label: '',
  upLoad: 'image',
  getImage: 'image'
};



