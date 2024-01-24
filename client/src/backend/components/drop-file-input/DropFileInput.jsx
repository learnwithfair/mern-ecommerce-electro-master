import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import "./drop-file-input.css";

import uploadImg from "../../assets/images/drag-drop/cloud-upload-regular-240.png";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const files = e.target.files;
    if (files.length != 0) props.onFileChange(files);
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        style={{ background: "#2a3038" }}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <h5>Uplood Image</h5>
          <p style={{ color: "#6c7293" }}>
            Image Size Must be Less than 2MB
          </p>
        </div>
        <input
          type="file"
          onChange={onFileDrop}
          accept=".png, .jpg, .jpeg"
          multiple
        />
      </div>
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
