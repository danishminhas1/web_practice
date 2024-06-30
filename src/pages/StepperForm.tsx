import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const steps = ['Name your connection', 'Connect DB', 'Add destination'];

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [connectionName, setConnectionName] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [dbIP, setDbIP] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [dbName, setDbName] = React.useState('');
  const [port, setPort] = React.useState('');
  const [dbIPError, setDbIPError] = React.useState(false);
  const [usernameError, setUsernameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [dbNameError, setDbNameError] = React.useState(false);
  const [portError, setPortError] = React.useState(false);

  const handleNext = () => {
    let isError = false;

    if (activeStep === 0 && !connectionName) {
      setNameError(true);
      isError = true;
    }

    if (activeStep === 1) {
      if (!dbIP) {
        setDbIPError(true);
        isError = true;
      }
      if (!username) {
        setUsernameError(true);
        isError = true;
      }
      if (!password) {
        setPasswordError(true);
        isError = true;
      }
      if (!dbName) {
        setDbNameError(true);
        isError = true;
      }
      if (!port) {
        setPortError(true);
        isError = true;
      }
    }

    if (!isError) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setConnectionName('');
    setNameError(false);
    setDbIP('');
    setUsername('');
    setPassword('');
    setDbName('');
    setPort('');
    setDbIPError(false);
    setUsernameError(false);
    setPasswordError(false);
    setDbNameError(false);
    setPortError(false);
  };

  return (
    <Box
      sx={{
        width: '40%',
        margin: 'auto',
        marginTop: '5vh',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px'
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel sx={{ marginBottom: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && (
            <Box sx={{ mt: 2, mb: 1 }}>
              <TextField
                label="Connection Name"
                value={connectionName}
                onChange={(e) => {
                  setConnectionName(e.target.value);
                  if (e.target.value) {
                    setNameError(false);
                  }
                }}
                error={nameError}
                helperText={nameError ? 'Connection name is required' : ''}
                fullWidth
              />
            </Box>
          )}
          {activeStep === 1 && (
            <Box sx={{ mt: 2, mb: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Database IP"
                    value={dbIP}
                    onChange={(e) => {
                      setDbIP(e.target.value);
                      if (e.target.value) {
                        setDbIPError(false);
                      }
                    }}
                    error={dbIPError}
                    helperText={dbIPError ? 'Database IP is required' : ''}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (e.target.value) {
                        setUsernameError(false);
                      }
                    }}
                    error={usernameError}
                    helperText={usernameError ? 'Username is required' : ''}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (e.target.value) {
                        setPasswordError(false);
                      }
                    }}
                    error={passwordError}
                    helperText={passwordError ? 'Password is required' : ''}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Database Name"
                    value={dbName}
                    onChange={(e) => {
                      setDbName(e.target.value);
                      if (e.target.value) {
                        setDbNameError(false);
                      }
                    }}
                    error={dbNameError}
                    helperText={dbNameError ? 'Database Name is required' : ''}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Port"
                    value={port}
                    onChange={(e) => {
                      setPort(e.target.value);
                      if (e.target.value) {
                        setPortError(false);
                      }
                    }}
                    error={portError}
                    helperText={portError ? 'Port is required' : ''}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
          )}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
