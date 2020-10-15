// image upload
const imageUpload = document.getElementById('image-upload');
const imageUploadButton = document.getElementById('image-upload-button');

const workInformation = document.querySelector('.js-work-information');
const educationInformation = document.querySelector('.js-education-information');
const workInformationAddMoreButton = document.querySelector('.js-work-information-add-more');
const educationInformationAddMoreButton = document.querySelector('.js-education-information-add-more');


const toggleEducationAddMoreButton = event => {
  event.preventDefault();

  const educationInformationDataMore = document.querySelectorAll('.js-education-information-more');
  const educationData = [];

  for (let i = 0; i < educationInformationDataMore.length; i ++) {
    educationData.push(i + 1);
  }

  const dataIndex = educationData.reduce((item, index) => index);

  const elem = document.createElement('div');
  elem.classList.value = 'cell wrapper _margin-bottom js-education-information-more';
  elem.innerHTML = `
      <div class="text-field">
        <input class="text-field__text" id="educational-institution-${dataIndex}" type="text" placeholder=" "
               name="educational-institution-${dataIndex}">
        <label class="text-field__label" for="educational-institution-${dataIndex}">Учебное заведение</label>
      </div>
      <div class="text-field">
        <input class="text-field__text" id="faculty-${dataIndex}" type="text" placeholder=" "
               name="faculty-${dataIndex}">
        <label class="text-field__label" for="faculty-${dataIndex}">Факультет</label>
      </div>
      <div class="text-field">
        <input class="text-field__text" id="specialty-${dataIndex}" type="text" placeholder=" "
               name="specialty-${dataIndex}">
        <label class="text-field__label" for="specialty-${dataIndex}">Специальность</label>
      </div>
   `;

  educationInformation.appendChild(elem);
};


const toggleWorkAddMoreButton = event => {
  event.preventDefault();

  const workInformationDataMore = document.querySelectorAll('.js-work-information-more');
  const workData = [];

  for (let i = 0; i < workInformationDataMore.length; i ++) {
    workData.push(i + 1);
  }

  const dataIndex = workData.reduce((item, index) => index);

  const elem = document.createElement('div');
  elem.classList.value = 'cell wrapper _margin-bottom js-work-information-more';
  elem.innerHTML = `
     <div class="text-field">
       <input class="text-field__text" id="position-${dataIndex}" type="text" placeholder=" "
         name="position-${dataIndex}">
       <label class="text-field__label" for="position-${dataIndex}">Должность</label>
     </div>
     <div class="text-field">
       <input class="text-field__text" id="organization-${dataIndex}" type="text" placeholder=" "
         name="organization-${dataIndex}">
       <label class="text-field__label" for="organization-${dataIndex}">Организация</label>
     </div>
     <div class="text-field _margin-top">
       <textarea class="text-field__text" name="responsibilities-${dataIndex}" id="responsibilities-${dataIndex}"
         rows="4" placeholder=" "></textarea>
       <label class="text-field__label" for="responsibilities-${dataIndex}">Должностные обязанности и достежения</label>
     </div>
   `;

  workInformation.appendChild(elem);
};


// image upload
const imageIsLoaded = () => {
  alert(this.src);
}

window.addEventListener('load', function() {
  imageUpload.addEventListener('change', function() {
    if (this.files && this.files[0]) {
      const imageResume = document.getElementById('image-resume');

      imageResume.src = URL.createObjectURL(this.files[0]);
      imageResume.onload = imageIsLoaded;
      imageResume.style.display = 'block';

      imageUploadButton.style.display = 'none';
    }
  });
});

imageUploadButton.addEventListener('click', () => {
  imageUpload.click();
});

educationInformationAddMoreButton.addEventListener('click', toggleEducationAddMoreButton);
workInformationAddMoreButton.addEventListener('click', toggleWorkAddMoreButton);
