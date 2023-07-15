import React, { useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { BsEmojiSmile } from 'react-icons/bs';

function EmojiPickerInput({ handleChange, showPicker, setShowPicker }) {
  const handleEmojiSelect = (selectedEmoji) => {
    setShowPicker(false);
    handleChange(selectedEmoji.native);
  };

  return (
    <div className="relative inline-block">
      {showPicker && (
        <div
          style={{
            position: 'absolute',
            top: '-440px',
            left: '-100px',
          }}>
          <Picker data={data} onEmojiSelect={handleEmojiSelect} theme="dark" />
        </div>
      )}
      <BsEmojiSmile
        className=" select-none cursor-pointer"
        onClick={() => {
          setShowPicker(!showPicker);
        }}
      />
    </div>
  );
}

export default EmojiPickerInput;
