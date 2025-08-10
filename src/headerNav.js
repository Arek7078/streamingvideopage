
    export const header = document.getElementById('mainHeader');
    export const navBar = document.getElementById('mainNav');
    export function headerScroll(){
      
      window.addEventListener('scroll', () => {
        if(window.scrollY > 35){
          header.classList.add('opacity-75');
          navBar.classList.add('opacity-0', 'pointer-events-none');
        } else {
          header.classList.remove('opacity-75');
          navBar.classList.remove('opacity-0', 'pointer-events-none');
        }
      })
    }
