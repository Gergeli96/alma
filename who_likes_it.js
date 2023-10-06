const likes = (users) => {

}

const testData = [
    {input: [], expextedOutput: 'no one likes this'},
    {input: ['Peter'], expextedOutput: 'Peter likes this'},
    {input: ['Jacob', 'Alex'], expextedOutput: 'Jacob and Alex like this'},
    {input: ['Max', 'John', 'Mark'], expextedOutput: 'Max, John and Mark like this'},
    {input: ['Alex', 'Jacob', 'Mark', 'Max'], expextedOutput: 'Alex, Jacob and 2 others like this'}
]

console.log(
    testData.every(x => likes(x.input) == x.expextedOutput)
)
