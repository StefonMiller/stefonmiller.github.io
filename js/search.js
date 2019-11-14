function compSearch()
{
    alert("Test");
    d = getArray(document.getElementById("DFSArray"));
    DFS(d);
    alert("Done");
}
function getArray(id)
{
    var temp = new Array(9);
    data = id.getElementsByTagName("td");
    for(i = 0; i < 9; i++)
    {
        temp[i] = new Array(9);
    }
    var count = 0;
    for(i = 0; i < 9; i++)
    {
        for(j = 0; j < 9; j++)
        {
            temp[i][j] = data[count];
            count++;
        }
    }
    return temp;
}
function DFS(arr)
{
    for(i = 0; i < 9; i++)
    {
        for(j = 0; j < 9; j++)
        {
            if(arr[i][j].innerHTML == "")
            {
                var valid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                temp = checkRow(arr, i);
                
            }
        }
        
        
    }
}
function checkRow(arr, i)
{
    var inv = new Array(9);
    for(j = 0; j < 9; j++)
    {
        if(arr[i][j].innerHTML != "")
        {
            inv.push(arr[i][j].innerHTML);
        }
    }
    return inv;
}
function checkCol(arr, j)
{
    
}
function check3x3(arr, i, j)
{
    
}