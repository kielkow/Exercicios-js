const funcs = []

for (var i = 0; i < 10; i++) {

    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()                           //var não possui escopo de blocos
funcs[8]()