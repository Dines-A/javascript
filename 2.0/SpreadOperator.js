

        /* spread operator and clone are similar  */
        let x=["1","2","3"];

        let y=["4","5","6"];

        //type-1 the output be as a string
        let type1=x+"," +y;

        console.log(type1);

        //type-2

        let type2=x.concat(y);

        console.log(type2);

        //type-3
        //spread operator the output be as a array

        let zspread=[ ...x, ...y];
        console.log(zspread);

