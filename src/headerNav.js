
    export const header = document.getElementById('mainHeader');
    export const navlinks = document.getElementById('navlinks');
    export const navBar = document.getElementById('mainNav');
    export function headerScroll(){
      
      window.addEventListener('scroll', () => {
        if(window.scrollY > 35){
          header.classList.add('bg-gray-950/75');
          navlinks.classList.add('hidden', 'pointer-events-none');
          navBar.classList.add('bg-gray-950/75');
        } else {
          header.classList.remove('bg-gray-950/75');
          navlinks.classList.remove('hidden', 'pointer-events-none');
          navBar.classList.remove('bg-gray-950/75');
        }
      })
    }
