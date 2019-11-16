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
                temp1 = checkCol(arr, j);
                temp2 = check3x3(arr, i, j);
                console.log("Rows of " + i + ", " + j + " " + temp);
                console.log("Columns of " + i + ", " + j + " " + temp1);
                console.log("3x3 of " + i + ", " + j + " " + temp2);
            }
        }
        
        
    }
}
function checkRow(arr, y)
{
    var inv = new Array(9);
    for(y = 0; y < 9; y++)
    {
        if(arr[i][y].innerHTML != "")
        {
            inv.push(arr[i][y].innerHTML);
        }
    }
    return inv;
}
function checkCol(arr, x)
{
    var inv = new Array(9);
    for(x = 0; x < 9; x++)
    {
        if(arr[x][j].innerHTML != "")
        {
            inv.push(arr[x][j].innerHTML);
        }
    }
    return inv;
}
function check3x3(arr, y, x)
{
    var inv = new Array(9);
    ypos = Math.floor(y/3) * 3;
    xpos = Math.floor(x/3) * 3;
    for(k = 0; k < 3; k++)
    {
        for(l = 0; l < 3; l++)
        {
            tempx = xpos + l;
            tempy = ypos + k;
            if(arr[tempy][tempx].innerHTML != "")
            {
                inv.push(arr[tempy][tempx].innerHTML);
            }
            
        }
    }
    return inv;
}