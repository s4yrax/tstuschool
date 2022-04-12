const animItems = document.querySelectorAll('._ts');

if (animItems.length>0)
	{
		animOns();
		window.addEventListener('scroll', animOns);
		function animOns(){
			for (let index = 0; index< animItems.length; index++){
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 5;

				let animItemPoint = window.innerHeight - animItemHeight/ animStart;
					if (animItemHeight >window.innerHeight){
						animItemPoint = window.innerHeight - window.innerHeight/animStart;
					}
					if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset <(animItemOffset + animItemHeight)){
						animItem.classList.add('_active');
					}	
			}
		}
		function offset(el){
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {top: rect.top +scrollTop, left: rect.left +scrollLeft}
		}
		
	}	
var t = 1;

function feedback()
{
	
	var div2 = document.getElementById("main");
	var div1 = document.getElementById("main1");
	div2.style.transform = "translateX(" + (0) + "px)";
	div2.style.display = "block"; // скрыть
	div2.style.opacity = "1"; // скрыть
	div2.style.transition = "1s"; // скрыть
	div1.style.transform = "translateX(" + (-1400) + "px)";
	div1.style.transition = "1s"; // скрыть
	div1.style.opacity = "0"; // скрыть
	
}
function feedback1()
{
	
	var div2 = document.getElementById("main");
	var div1 = document.getElementById("main1");
	var div3 = document.getElementById("main2");
	div2.style.transform = "translateX(" + (+1400) + "px)";
	div2.style.display = "block"; // скрыть
	div2.style.opacity = "0"; // скрыть
	div2.style.transition = "1s"; // скрыть
	div1.style.transform = "translateX(" + (0) + "px)";
	div1.style.transition = "1s"; // скрыть
	div1.style.opacity = "1"; // скрыть
	
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
smoothLink.addEventListener('click', function(event) {
event.preventDefault();
const yOffset = 20;
const id = smoothLink.getAttribute('href');
const element = document.querySelector(id)
const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

window.scrollTo({top: y, behavior: 'smooth'});
})
}