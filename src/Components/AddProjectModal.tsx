import * as React from 'react';
import Modal from 'react-modal';
import { ModalProps } from '../../types';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';

export default function AddProjectModal ({isShown, handleClose, handleSave, headerText, setNameErr, setURLErr, projectNameError, projectURLError}: ModalProps) {
  const resetNameErr = () => {
    setNameErr(false);
  }

  const resetURLErr = () => {
    setURLErr(false);
  }

  return (
    <div>
      <Modal
        isOpen={isShown}
        onRequestClose={handleClose}
        appElement={document.getElementById('root')}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            maxWidth: '500px',
            maxHeight: '300px',
            position: 'relative',
            top: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '50px',
            display: 'grid',
            gridTemplateRows: '40px 65px 65px 65px'
          }
        }}
      >
        <FormLabel><b>{headerText}</b></FormLabel>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="project-name">Project Name</InputLabel>
          <Input id="project-name" error={projectNameError} onChange={resetNameErr}/>
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="project-url">Project URL</InputLabel>
          <Input id="project-url" error={projectURLError} onChange={resetURLErr}/>
        </FormControl>
        <span><Button id='save-button' onClick={handleSave} variant='contained'>Save</Button><Button id='save-button' onClick={handleClose} variant='outlined'>Cancel</Button></span>
      </Modal>
    </div>
  );
}