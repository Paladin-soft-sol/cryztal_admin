import React from 'react';
import './style.css';
/**
 *
 * @returns
 */
function NotFoundError() {
	return (
		<div id="notfound">
			<div className="notfound">
				<div className="notfound-404">
					<h1>
						4<span>0</span>4
					</h1>
				</div>
				<h2>the page you requested could not found</h2>
				{/* <form className="notfound-search">
          <input type="text" placeholder="Search..." />
          <button type="button" />
        </form> */}
			</div>
		</div>
	);
}
export default NotFoundError;
