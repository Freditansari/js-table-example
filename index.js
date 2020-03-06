

var customers = [
    {'first_name': 'Joe', 'last_name':'Tanaka', 'age':40},
    {'first_name': 'Johanna', 'last_name':'Potato', 'age':36},
    {'first_name': 'Sally', 'last_name':'Cabbage', 'age':15}
]


let html = `
<table class="table table-dark table-striped">
<thead>
  <tr>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Age</th>
  </tr>
</thead>
<tbody>
`

customers.map(
    customer =>{
        html +='<tr>';
        html +='<td>'+ customer.first_name +'</td>';
        html +='<td>'+ customer.last_name +'</td>';
        html +='<td>'+ customer.age +'</td>';
        html+= '</tr>'

    }
)

html += `
</tbody>
</table>
`

document.getElementById("customer-table").innerHTML = html

// let customers_age_sum = customers.reduce((total, customer) =>{
//     return total + customer.age;
// },0);

// console.log(customers_age_sum);

