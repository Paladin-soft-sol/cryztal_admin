/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';
import { CustomTypography } from '../Typography';
import './multiImageUpload.css';
/**
 *
 * @param {object} props - required props in MultiImage
 * @returns {React.ReactElement} - returns the MultiImage component
 */
export const MultiImage = (props) => {
  const { label, upLoad, getImage } = props;
  const [file, setFile] = useState([]);
  const [multiImage, setMultiImage] = useState([]);
  const fileRef = useRef();
  const [imageupload, SetImageupload] = useState();

  /**
   *
   * @param {Event} e --event
   */
  function uploadSingleFile(e) {
    const arr = [];
    arr.push(e.target.files);
    e.preventDefault();
    SetImageupload(e.target.files[0]);
    const ImagesArray = Object.entries(e.target.files).map((item) =>
      URL.createObjectURL(item[1])
    );
    setFile([...file, ...ImagesArray]);
    getImage(arr);
  }
  /**
   *
   * @param {Event}e -- event
   */
  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
  }

  return (
    <form>
      <div className="form-group">
        <input
          type="file"
          disabled={file.length === 5}
          className="form-control"
          onChange={(e) => uploadSingleFile(e)}
          multiple
          ref={fileRef}
          style={{ display: 'none' }}
        />
      </div>

      <div
        className="uploadImageContainer"
        onClick={() => fileRef.current.click()}
        aria-hidden
      >
        <CustomTypography
          text={label}
          type="caption"
          customStyle={{ color: '#f5f11a' }}
        />
        <img src={upLoad} alt="upload" className="imageUpload" />
      </div>

      <div className="form-group preview">
        {file?.length > 0 &&
          file.map((item, index) => {
            return (
              <div className="imageViewer" key={item}>
                <img className="imageViewer2" src={item} alt="" />

                <span
                  className="delete"
                  onClick={() => deleteFile(index)}
                  aria-hidden
                >
                  x
                </span>
              </div>
            );
          })}
      </div>
    </form>
  );
};
export default MultiImage;

MultiImage.propTypes = {
  label: propTypes.string,
  upLoad: propTypes.string,
  getImage: propTypes.func
};
MultiImage.defaultProps = {
  label: '',
  upLoad: 'image',
  getImage: 'image'
};
