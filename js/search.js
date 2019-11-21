/*
*compSearch
*This method creates the array representing our sudoku board and executes 
*BFS and DFS algorithms to solve the board
*/
function compSearch()
{
    alert("Test");
    //Create a BFS and DFS array and call the searches at the same time
    var d;
    d = getArray(document.getElementById("DFSArray"));
    DFS(d);
    alert("Done");
}
/*
*getArray
*This method creates a 9x9 array and populates it with our sudoku board
*Additionally, it creates the board from the HTML file, which allows
*for board modification by changing the table
*/
function getArray(id)
{
    //Create temporary representation of our board
    var temp = new Array(9);
    //Create a 1d array containing all of the board's data
    var data = id.getElementsByTagName("td");
    //Make temp a 2d array by assigning each index an additional array
    for(i = 0; i < 9; i++)
    {
        temp[i] = new Array(9);
    }
    //Populate the array with out data
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
/*
*DFS
*This method performs DFS on a sudoku board via recursive backtracking
*/
function DFS(arr)
{
    //Search our array for an empty tile
    for(i = 0; i < 9; i++)
    {
        for(j = 0; j < 9; j++)
        {
            //Once we get to an empty element, evaluate which values are //valid
            if(arr[i][j].innerHTML == "")
            {
                
                
            }
        }
        
        
    }
}
function getChoices()
{
   var valid = new Array();
    var temp, temp1, temp2, invalid;
    //Check an index's rows, columns, and 3x3 grid to determine what values are invalid
    temp = checkRow(arr, i);
    temp1 = checkCol(arr, j);
    temp2 = check3x3(arr, i, j);
    invalid = union(union(temp, temp1), temp2);
    //Now, we figure out what values we can use by
    //not including any invalid values
    for(var k = 1; k < 9; k++)
    {
        if(!invalid.includes(k.toString()))
        {
            valid.push(k);
        }
    } 
}
/*
*union
*This method returns the union of 2 arrays
*/
function union(arr1, arr2)
{
    //Temp array to return 
    var temparr = new Array();
    //create max index
    var m = Math.max(arr1.length, arr2.length);
    for(var i = 0; i < m; i++)
    {
        //If temp array already has the value at i, don't add it
        if(!temparr.includes(arr1[i]))
        {
            temparr.push(arr1[i]);
        }
        if(!temparr.includes(arr2[i]))
        {
            temparr.push(arr2[i]);
        }
    }
    return temparr;
}
/*
*checkRow
*Returns all values found at row y
*/
function checkRow(arr, y)
{
    //Loop through the row and return an array with all values found
    var inv = new Array();
    for(var y = 0; y < 9; y++)
    {
        if(arr[i][y].innerHTML != "")
        {
            inv.push(arr[i][y].innerHTML);
        }
    }
    return inv;
}
/*
*checkCol
*Returns all values found at column x
*/
function checkCol(arr, x)
{
    //Loop through the column and return an array with all values found
    var inv = new Array();
    for(var x = 0; x < 9; x++)
    {
        if(arr[x][j].innerHTML != "")
        {
            inv.push(arr[x][j].innerHTML);
        }
    }
    return inv;
}
/*
*check3x3
*Returns all values found in a particular 3x3 grid
*/
function check3x3(arr, y, x)
{
    //we will be searching a 3x3 grid starting at indices in multiples of 
    //3.  So, we divide our given indices by 3 and truncate the remainder
    //to get the top-left corner.  For example, index 4,4 would evaluate 
    //to 3,3
    var inv = new Array();
    var ypos = Math.floor(y/3) * 3;
    var xpos = Math.floor(x/3) * 3;
    //Once we get the starting index, loop in a 3x3 grid and return all
    //values found
    for(var k = 0; k < 3; k++)
    {
        for(l = 0; l < 3; l++)
        {
            var tempx = xpos + l;
            var tempy = ypos + k;
            if(arr[tempy][tempx].innerHTML != "")
            {
                inv.push(arr[tempy][tempx].innerHTML);
            }
            
        }
    }
    return inv;
}