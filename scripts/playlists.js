const refs = {
  //           creating-part
  block_section: document.querySelector(".block-section"),
  modal: document.querySelector(".creating-part"),
  open_modal_button: document.querySelector(".add-button"),
  close_modal_button: document.querySelector(".back-button"),
  create_block_button: document.querySelector(".create-block-button"),
  playlist_name_block: document.querySelector(".playlist-name-block"),
  // playlist_content_back_button_adding_song_in_playlist: document.querySelector(),
  //   playlist_img_block: document.querySelector('.playlist-name-block'),

  //           playlist-content_active
  playlist_content: document.querySelector(".playlist-content"),
  playlist_content_back_button: document.querySelector(
    ".playlist-content-back-button"
  ),
};

refs.open_modal_button.addEventListener("click", (event) => {
  refs.modal.classList.replace("creating-part", "creating-part_active");
});

refs.close_modal_button.addEventListener("click", (event) => {
  refs.modal.classList.replace("creating-part_active", "creating-part");
});

refs.create_block_button.addEventListener("click", (event) => {
  console.log("click on create_block_button");
  const new_playlists_block = document.createElement("div");
  new_playlists_block.className = "playlist-block";
  new_playlists_block.style.backgroundImage = refs.playlist_img_block;
  const new_playlists_block_title = document.createElement("h6");
  new_playlists_block_title.className = "playlist-block-title";
  new_playlists_block_title.textContent = refs.playlist_name_block.value;
  new_playlists_block.appendChild(new_playlists_block_title);
  refs.block_section.prepend(new_playlists_block);

  new_playlists_block.addEventListener("click", (event) => {
    console.log("click on block");
    refs.playlist_content.classList.replace(
      "playlist-content",
      "playlist-content_active"
    );
    const playlist_content_playlist_title = document.createElement("h6");
    playlist_content_playlist_title.className =
      "playlist_content_playlist_title";
    playlist_content_playlist_title.textContent =
      new_playlists_block_title.textContent;
    refs.playlist_content.appendChild(playlist_content_playlist_title);
    const playlist_content_playlist_img = document.createElement("img");
    playlist_content_playlist_img.src = "../images/dark.jpg";
    playlist_content_playlist_img.className = "playlist_content_playlist_img";
    refs.playlist_content.appendChild(playlist_content_playlist_img);
    const playlist_content_playlist_img_hover_box =
      document.createElement("div");
    playlist_content_playlist_img_hover_box.className =
      "playlist_content_playlist_img_hover_box";
    refs.playlist_content.appendChild(playlist_content_playlist_img_hover_box);
    const playlist_content_playlist_img_hover_box_img =
      document.createElement("img");
    playlist_content_playlist_img_hover_box_img.className =
      "playlist_content_playlist_img_hover_box_img";
    playlist_content_playlist_img_hover_box_img.src =
      "../images/add-image-white.png";
    playlist_content_playlist_img_hover_box.appendChild(
      playlist_content_playlist_img_hover_box_img
    );

    // remove part

    refs.playlist_content_back_button.addEventListener("click", (e) => {
      refs.playlist_content.classList.replace(
        "playlist-content_active",
        "playlist-content"
      );
      refs.playlist_content.removeChild(playlist_content_playlist_title);
      refs.playlist_content.removeChild(playlist_content_playlist_img);
    });
  });
});
