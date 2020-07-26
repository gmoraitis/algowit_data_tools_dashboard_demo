// Recency Score Values
// Best Customer = 5
// Very Good Customer = 4
// Good Customer = 3
// Needs Attention = 2
// Not Active = 1
//var r = [5, 4, 3, 2, 1];


// function calc(data, columns) {
//   var table = d3.select('body').append('table')
//   var thead = table.append('thead')
//   var tbody = table.append('tbody')
//   thead.append('tr').selectAll('th').data(columns).enter().append('th').text(function (d) { return d })
//   var rows = tbody.selectAll('tr').data(data).enter().append('tr')
//   var cells = rows.selectAll('td').data(function (row) {
//     return columns.map(function (column) {
//       return { column: column, value: row[column] }
//     })
//   }).enter().append('td').text(function (d) { return d.value })
//   return table;
// for (i = 0; i <= a.length; i++) {
//     if (a[i] <= 100 && a[i] >= 80) {
//         console.log("The Customer with value ", a[i], "Taking the place ", b[0]);
//     }
//     else if (a[i] <= 79 && a[i] >= 60) {
//         console.log("The Customer with value ", a[i], "Taking the place ", b[1]);
//     }
//     else if (a[i] <= 59 && a[i] >= 40) {
//         console.log("The Customer with value ", a[i], "Taking the place ", b[2]);
//     }
//     else if (a[i] <= 39 && a[i] >= 20) {
//         console.log("The Customer with value ", a[i], "Taking the place ", b[3]);
//     }
//     else if (a[i] <= 19 && a[i] >= 0) {
//         console.log("The Customer with value ", a[i], "Taking the place ", b[4]);
//     }
// }
// }

function update(data, columns) {
  var table = d3.select('table').append('table')
  var thead = table.append('thead')
  var tbody = table.append('tbody')
  thead.append('tr').selectAll('th').data(columns).enter().append('th').text(function (d) { return d })
  var rows = tbody.selectAll('tr').data(data).enter().append('tr')
  var cells = rows.selectAll('td').data(function (row) {
    return columns.map(function (column) {
      return { column: column, value: row[column] }
    })
  }).enter().append('td').text(function (d) { return d.value })
  return table;
};

function clear() {
  var table = d3.select('table').selectAll("table").remove();
}

function callback() {
  // var sum = 0;
  // var github = 'https://raw.githubusercontent.com/jzuniga123/SPS/master/DATA%20608/presidents.csv'
  var t = d3.csv('/files/rfm.csv', function (data) {
    var columns = ['ID', 'DATE OF PURCHASE', 'PRICE', 'RECENCY', 'FREQUENCY', 'MONETARY'];
    // data.forEach(function (d) {
    //   d.ID = +d.ID;
    //   d['DATE OF PURCHASE'] = +d['DATE OF PURCHASE'];
    //   d.PRICE = +d.PRICE;
    //   d.MONETARY = +d.MONETARY;

    // });

    // var price = data;
    // console.log(price);

    // for (i = 0; i <= data.length; i++) {
    //   sum = data[i]['PRICE'];
    //   if (sum >= 100 && sum >= 80) {
    //     data[i]['MONETARY'] = 5;
    //   } else if (sum >= 79 && sum >= 60) {
    //     data[i]['MONETARY'] = 4;
    //   } else if (sum >= 59 && sum >= 40) {
    //     data[i]['MONETARY'] = 3;
    //   } else if (sum >= 39 && sum >= 20) {
    //     data[i]['MONETARY'] = 2;
    //   } else if (sum >= 19 && sum >= 0) {
    //     data[i]['MONETARY'] = 1;
    //   };
    // }

    update(data, columns);


  });
}






// CALCULATE
// Gia ola ta ID ean ta columns PRICE anhkoyn se sygkekrimena paidia epestrepse thn opoia timh sto RECENCY paidio.
// a = data , b = columns.
// sta columns ths thesis 2 prosuetoyme tis times kai tis emgfanizoyme

// var r = [5, 4, 3, 2, 1];


// d3.csv("/files/rfm.csv",function (data) {
//     console.log(data[0]);
// });

//.then is not a function
// d3.csv("/files/rfm.csv", function (d) {
//     return {
//         ID: d.ID,
//         DATE_OF_PURCHASE: +d["DATE OF PURCHASE"],
//         PRICE: d.PRICE
//     };
// }).then(function (data) {
//     console.log(data[0]);
// });

// d3.csv("/files/rfm.csv").then(function (data) {
//     data.forEach(function (d) {
//         // d.ID = +d.ID;
//         d["ID"] = +d["ID"];
//         d.DATE_OF_PURCHASE = +d.DATE_OF_PURCHASE;
//         d["DATE_OF_PURCHASE"] = +d["DATE_OF_PURCHASE"];
//         //d.PRICE = +d.PRICE;
//         d["PRICE"] = +d["PRICE"];
//     });
//     console.log(data[0]);
// });




// function calc(a, b) {
//     for (i = 0; i <= a.length; i++) {
//         if (a[i] <= 100 && a[i] >= 80) {
//             console.log("The Customer with value ", a[i], "Taking the place ", b[0]);

//         }
//         else if (a[i] <= 79 && a[i] >= 60) {
//             console.log("The Customer with value ", a[i], "Taking the place ", b[1]);
//         }
//         else if (a[i] <= 59 && a[i] >= 40) {
//             console.log("The Customer with value ", a[i], "Taking the place ", b[2]);
//         }
//         else if (a[i] <= 39 && a[i] >= 20) {
//             console.log("The Customer with value ", a[i], "Taking the place ", b[3]);
//         }
//         else if (a[i] <= 19 && a[i] >= 0) {
//             console.log("The Customer with value ", a[i], "Taking the place ", b[4]);
//         }
//     }
// }
// calc(data, r);

// d3.csv('/files/rfm.csv',function (data) {
//     var columns = ['ID','DATE OF PURCHASE','PRICE','RECENCY','FREQUENCY','MONETARY']
//   tabulate(data,columns)
// })

// var tabulate = function (data,columns) {
//     var table = d3.select('table').append('table')
//       var thead = table.append('thead')
//       var tbody = table.append('tbody')

//       thead.append('tr')
//         .selectAll('th')
//           .data(columns)
//           .enter()
//         .append('th')
//           .text(function (d) { return d })

//       var rows = tbody.selectAll('tr')
//           .data(data)
//           .enter()
//         .append('tr')

//       var cells = rows.selectAll('td')
//           .data(function(row) {
//               return columns.map(function (column) {
//                   return { column: column, value: row[column] }
//             })
//         })
//         .enter()
//       .append('td')
//         .text(function (d) { return d.value })

//     return table;
//   }


  // function call(){
  //   	var github = 'https://raw.githubusercontent.com/jzuniga123/SPS/master/DATA%20608/presidents.csv'
  //   	var t = d3.csv('/files/rfm.csv',function (data) {
  //       var columns = ['ID', 'DATE OF PURCHASE', 'PRICE','RECENCY','FREQUENCY','MONETARY'];

  //         tabulate(data,columns);
  //         calc(data,r);
  //          }); 
  //     }