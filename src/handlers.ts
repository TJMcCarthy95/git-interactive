export const onError = (error: any) => {
  if (error.stderr) {
    process.stderr.write(error.stderr);
  } else {
    console.log(error);
  }
};
