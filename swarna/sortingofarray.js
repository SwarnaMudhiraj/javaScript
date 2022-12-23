
            let ary = [1, 6, 2, 7, 1, 3, 2, 4, 5, 4];
let sorted = [];
function duplicatesremove(ary) {
    var removing = ary.reduce((elements, currentElement) => {
        if (!elements.includes(currentElement))
        {
            elements.push(currentElement);
            return currentElement;
        }
        return removing;
    },[])
    
}
let removed=duplicatesremove[ary]
console.log(removed)
for (let i = 0; i < removed.length-1;i++)
{
    for (let j = 0; j < removed.length - 1; j++)
    {
        if (removed[i] > removed[j])
        {
            let temp = removed[i];
            removed[i] = removed[j]
            removed[j] = temp;
        }
        }
}
for (x of removed)
{
  let finish=  sorted.push(x);
}
console.log(finish)