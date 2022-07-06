const show = document.querySelector('.blog-image1');
const show2 = document.querySelector('.blog-image2');
const show3 = document.querySelector('.blog-image3');

const hidden = document.querySelector('.read');
const hidden2 = document.querySelector('.read2');
const hidden3 = document.querySelector('.read3');


show.addEventListener('mouseover', function hoverEffect() {
  hidden.style.display = 'block';
});

show.addEventListener('mouseout', function hoverOut() {
  hidden.style.display = 'none';

});
show2.addEventListener('mouseover', function hoverEffect2() {
    hidden2.style.display = 'block';
  });
  
  show2.addEventListener('mouseout', function hoverOut2() {
    hidden2.style.display = 'none';
  
  });
  show3.addEventListener('mouseover', function hoverEffect3() {
    hidden3.style.display = 'block';
  });
  
  show3.addEventListener('mouseout', function hoverOut3() {
    hidden3.style.display = 'none';
  
  });