function showElements(id)
{
    if(event.target.tagName.toLowerCase() ==='li')
    {
        if(id.innerHTML.charAt(0) == '+')
        {
            txt = id.innerHTML.split("");
            txt[0] = '-';
            id.innerHTML=txt.join("");
            c = id.children[0].children;
            for(i=0; i < c.length; i++)
            {
                c[i].style.display = "block";
            }
                
        }
        else
        {
            txt = id.innerHTML.split("");
            txt[0] = '+';
            id.innerHTML=txt.join("");
            c = id.children[0].children;
            for(i=0; i < c.length; i++)
            {
                c[i].style.display = "none";
            }
        }
    }
    else if(event.target.tagName.toLowerCase() ==='a')
    {
        event.stopPropagation();
    }
    
}