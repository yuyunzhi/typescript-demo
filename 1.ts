
{
    enum Gender {
        Male,
        Female
    }
    interface Person {
        gender: Gender
    }

    function merry(a: Person, b: Person) {
        if (a.gender !== b.gender) {
            return [a, b];
        } else {
            throw new Error('xxx');
        }
    }   
    
    let a = { gender: Gender.Male };
    let b = { gender: Gender.Female };
    console.log(merry(a, b));

}
