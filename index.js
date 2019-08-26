var data;
function createAjaxRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  //   xhr.onload = function() {
  //     console.log("onload", this.readyState);
  //     console.log("load", this.status);
  //   };

  xhr.onreadystatechange = function() {
    console.log(this.readyState, this.status);

    if (this.readyState == 4 && this.status == 200) {
      var resp = this.responseText;
      data = resp;
      callback();
      //   document.querySelector(".ajax-response").innerHTML = resp;
    }
  };

  //   get request
  //   xhr.open("GET", url, true);
  //   xhr.send();
  //   get request ends

  //   post request
  // xhr.open("POST", "http://dummy.restapiexample.com/api/v1/employees", true);
  xhr.open("POST", url, true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xhr.send({ name: "test", salary: "123", age: "23", id: "719" });
  //   post request ends
}

function localData() {
  console.log("local data", data);
}

function remoteData() {
  console.log("remote data", data);
}
// createAjaxRequest(
//   "http://dummy.restapiexample.com/api/v1/employees",
//   remoteData
// );
createAjaxRequest("http://dummy.restapiexample.com/api/v1/create", remoteData);
// remoteData();
createAjaxRequest("./notes.js", localData);
// localData();
