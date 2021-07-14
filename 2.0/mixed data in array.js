
        let mi = [ 
            "dinesh",
            20,
            "bit",
            true,
            null,
            undefined,
            {
                like:'web dev',
                sports:'football'
            },
            function() 
            {
                console.log('mixed data type inside array');
            },
            function welcomfucka(name) 
            {
                console.log('welcome funcka'+name);
            }
    ]
    console.log(mi);
    //this is how call function that inside aray
    mi[7]();
    mi[8]("dinesh")
