// import { ORIGIN } from "../config.js";
/**
 * Document me!
 *
 * @returns
 */

export const renderUser = (data) => {
  debugger;
  // create container
  const container = document.createElement('div');
  container.className = 'card card-body mb-3';

  // assign innerHTML to container
  container.innerHTML = `
    <div class="row">
    <div class="col-md-3">
      <img src= ${data.avatar_url}  class="img-fluid mb-2"> 
      <a href=${data.html_url} target = "blank" class="btn btn-primary btn-block mb-4">View profile</a>
    </div>
    <div class="col-md-9">
      <h3>${data.name}</h3>
      <small>${data.bio}</small>
      <br>
      <br>
      <span class="badge bg-primary">Public Repos: ${data.public_repos}</span>
      <span class="badge bg-secondary">Public Gists: ${data.public_gists}</span>
      <span class="badge bg-success">Followers: ${data.followers}</span>
      <span class="badge bg-info">Following: ${data.following}</span>
      <br>
      <br>
      <ul class="list-group">
        <li class="list-group-item">"Company: ${data.company}"</li>
        <li class="list-group-item">"Website/Blog: ${data.blog}"</li>
        <li class="list-group-item">"Location: ${data.location}"</li>
        <li class="list-group-item">"Account Created: ${data.created_at}"</li>
      </ul>
    </div>
  </div>`;

  // append container
  document.getElementById('profile').appendChild(container);
};

/* ${}
<template id="my-profile-div">
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="" alt="" class="img-fluid mb-2"> <!-- <img class="img-fluid mb-2" src="https://avatars.githubusercontent.com/u/88941807?v=4"> -->
            <a href="" class="btn btn-primary btn-block mb-4">View profile</a>
          </div>
          <div class="col-md-9">
            <h3></h3>
            <small></small>
            <br>
            <br>
            <span class="badge bg-primary"></span>
            <span class="badge bg-secondary"></span>
            <span class="badge bg-success"></span>
            <span class="badge bg-info"></span>
            <br>
            <br>
            <ul class="list-group">
              <li class="list-group-item"></li>
              <li class="list-group-item"></li>
              <li class="list-group-item"></li>
              <li class="list-group-item"></li>
            </ul>
          </div>
        </div>
      </div>
    </template>


*/
