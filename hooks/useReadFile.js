const useReadFile = () => {
    function readFileAsync(file){
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = () => {
              resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
          });
    }
    return readFileAsync;
};

export default useReadFile;
