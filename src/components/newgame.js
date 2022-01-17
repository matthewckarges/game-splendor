import React from "react";
import { gapi, loadClientAuth2 } from "gapi-script";
import { requestFile } from "../api";

const google = window.google;
class NewGame extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.oauthToken = null;
    this.pickerApiLoaded = false;
    this.google = window.google;

    // The Browser API key obtained from the Google API Console.
    // Replace with your own Browser API key, or your own key.
    this.developerKey = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;

    // The Client ID obtained from the Google API Console. Replace with your own Client ID.
    this.clientId = process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID;

    // Replace with your own project number from console.developers.google.com.
    // See "Project number" under "IAM & Admin" > "Settings"
    this.appId = "sandbox-1c3d8";

    // Scope to use to access user's Drive items.
    this.scope = ["https://www.googleapis.com/auth/drive.file"];

    this.discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
  }

  handleAuthResult(authResult) {
    console.log("handleAuthResult ::: " + JSON.stringify(authResult));
    if (authResult && !authResult.error) {
      this.oauthToken = authResult.access_token;
      this.google = window.google;
      this.createPicker();
    }
  }

  onPickerApiLoad() {
    console.log("onPickerApiLoad");
    this.pickerApiLoaded = true;
    this.createPicker();
  }
  createPicker() {
    console.log("createPicker");
    if (this.pickerApiLoaded && this.oauthToken) {
      const googleViewId = this.google.picker.ViewId.DOCS;
      const docsView = new this.google.picker.DocsView(googleViewId)
        .setIncludeFolders(true)
        .setMode(this.google.picker.DocsViewMode.GRID)
        .setQuery("*.splendor-game.json")
        //.setMimeTypes('application/vnd.google-apps.folder,application/game.data.gfile')
        .setSelectFolderEnabled(true);
      var picker = new this.google.picker.PickerBuilder()
        .addView(docsView)
        .setOAuthToken(this.oauthToken)
        .setDeveloperKey(this.developerKey)
        .setCallback((d) => this.pickerCallback(d))
        .build();
      picker.setVisible(true);
    }
  }

  onAuthApiLoad() {
    console.log("onAuthApiLoad");
    console.log(this.clientId);
    let self = this;
    gapi.auth2.authorize(
      {
        client_id: this.clientId,
        scope: this.scope,
        immediate: false,
      },
      (r) => self.handleAuthResult(r)
    );
  }
  pickerCallback(data) {
    console.log("pickerCallback ::: " + JSON.stringify(data, null, 2));
    var url = "nothing";
    if (data[this.google.picker.Response.ACTION] == this.google.picker.Action.PICKED) {
      console.log(`pickerCalback ::: inside if statement ::: ${this.clientId} -- ${this.scope}`);
      var doc = data[this.google.picker.Response.DOCUMENTS][0];
      url = doc[this.google.picker.Document.URL];
      console.log(`pickerCallback :: doc ::: ${JSON.stringify(doc, null, 2)}`);
      //requestFile(url).then(res => console.log(JSON.stringify(res, null, 2)));
      gapi.client.load('drive', 'v2', () => {
        console.log('gapi.client.drive loaded!!')
        gapi.client.drive.files
          .get({
            fileId: doc[this.google.picker.Document.ID],
            alt: "media",
          })
          .then(
            function (success) {
              console.log("SUCCESS!! ::: " + success);
              //success.result
            },
            function (fail) {
              console.log(fail);
              console.log("Error " + fail.result.error.message);
            }
          );
      });
      // loadClientAuth2(gapi, this.clientId, this.scope).then(function (gapiClient) {
      //   debugger;
      //   gapiClient.drive.files
      //     .export({
      //       fileId: doc[this.google.picker.Document.ID],
      //       mimeType: "text/plain",
      //     })
      //     .then(
      //       function (success) {
      //         console.log("SUCCESS!! ::: " + success);
      //         //success.result
      //       },
      //       function (fail) {
      //         console.log(fail);
      //         console.log("Error " + fail.result.error.message);
      //       }
      //     );
      // });
    }
    var message = "You picked: " + url;
    console.log(message);
    document.getElementById("result").innerHTML = message;
  }
  componentDidMount() {
    let self = this;
    console.log("componentDidMount");
    //let gapiClient = loadClientAuth2(gapi, clientId, scopes);

    gapi.load("auth2", () => {
      console.log("auth2 callback");
      self.onAuthApiLoad();
    });
    gapi.load("picker", () => self.onPickerApiLoad());
    gapi.load("client", {
      callback: () => {
        console.log("gapi.client loaded.");
        console.log(gapi);
        console.log(gapi.client);

        // gapi.client
        //   .init({
        //     apiKey: this.developerKey,
        //     clientId: this.clientId,
        //     discoveryDocs: this.discoveryDocs,
        //     scope: this.scope,
        //   })
        //   .then(
        //     function (res) {
        //       console.log(`gapi.client.init ::: SUCCESS ::: ${JSON.stringify(res, null, 2)}`);
        //     },
        //     function (error) {
        //       console.log(`gapi.client.init ::: ERROR ::: ${JSON.stringify(error, null, 2)}`);
        //     }
        //   );
      },
      onerror: (msg) => {
        console.log(msg);
        console.log("gapi.client failed to load!");
      },
      timeout: 5000, // 5 seconds.
      ontimeout: function () {
        console.log("gapi.client could not load in a timely manner!");
      },
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="result"></div>
      </React.Fragment>
    );
  }
}
export default NewGame;
