// const insta = document.querySelector('.instagram__content');
//   (function () {
//     new InstagramFeed({
//       'username': 'starfuckedmodel',
//       'display_profile': false,
//       'display_biography': false,
//       'display_gallery': true,
//       'display_captions': true,
//       'callback': function (data) {
//         let instaArray = data.edge_owner_to_timeline_media.edges;

//         for (let item of instaArray) {
//           console.log(item.node);
//           let element = item.node;
//           insta.insertAdjacentHTML('afterbegin', `
//             <li>
//               <a href="https://www.instagram.com/" target="_blank">
//                 <img src="${element.tumbnail_src}" alt="${element.accessibility_caption}">
//               </a>
//             </li>
//           `);
//         }
//       },
//       'styling': false,
//       'items': 5,
//       // 'items_per_row': 4,
//       // 'margin': 1,
//     })
//   })();
