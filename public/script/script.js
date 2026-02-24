const stars = document.querySelectorAll('.star');
const button = document.getElementById('submit-btn');
const logo = document.getElementById('logo');
let counter = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        counter = parseInt(rating);
        stars.forEach(s => {
            if (s.getAttribute('data-value') <= rating) {
                s.classList.add('selected');
            } else {
                s.classList.remove('selected');
            }
    });
});
});

button.addEventListener('click', () => {
    if (counter <= 3) {
        window.location.href = 'https://youtube.com/shorts/lnLJRg7nrEE?si=znuZb01Qrr6uVftd';
    } else if (counter >= 4) {
        window.location.href = 'https://www.google.com/search?sca_esv=48cff7b3afdc9477&rlz=1CDGOYI_enBR1078BR1078&hl=pt&q=avalia%C3%A7%C3%B5es+sobre+galeto+mamma+mia+%7C+i+fashion+outlet+sc+sentido+norte&uds=ALYpb_ne0uGBBGQEr1iOHtQf9rzL7eoyFXrY2FjcGwbXkUEetZTNcMITqXJphC-ui94vkMtjiDKx_0XOXI1ghln1UiLKmhK64s78wCtaTVnuX9okTURvjWomWOoAjffonyp3z_Aw-T66An9lL-SPS-1lmaIRjnZOunevLpxhKMuKpgu2_GFCmc9FMiVfzaOfW3F-_Mv-Og0ICZk6Bx4oo93O1px7sBeq5b_5bPv3wNVMx2W7ESyscZ9Wmmqj4U2Mps5Q1lkJ6Yvt-sY8VdembMRrNplVVw6IYCm1pr_xjR6nauKI-1ucx5PxbVfPVIOOv-rN4SuZ6etlvhIMCSjvL0gO7hW_9C7tueKAX3AFS6wkZa47xSIbmExwR2tAlOKIhCuXFMN6gwpPC4UbSbx-yRoOFnGt6nXHl47lMMU8fEYKxWFskT6Qy2kW-e8GumjTpsS3j6dg5zZZyH4BOAY7DA8obIaKrzN7cW1cA5pxRYh11jMlWImZBuI71dRm92uixVqas1AtiM2VMOhkNJQk8VYNqjbfd--e6A&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOb_60gpN8VJZkA172ZpTq7BhuFsSODBeydaEkIv4k9f4NkpO8aYuUVTtkCnuK7KEsYq5RoW9pl0gYYM-sQwG6U_i6Hw_VTctgJ8aI0gMfKUhbuBIGR95hQd0sgk0K83odfxeucXmeXbX0Yj-8xd6VcBVMoR_&sa=X&ved=2ahUKEwiy74Xc0_CSAxWmALkGHW9xLHcQk8gLegQIFxAB&ictx=1&biw=390&bih=739&dpr=3&noiga=1&pli=1&zx=1771885496024&no_sw_cr=1#ebo=4';
    }});

logo.addEventListener('click', () => {
    window.location.href = 'https://www.galetomammamia.com.br';
});