var customers = [
    {
      ID: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
    },
    {
      ID: 2,
      name: "Nguyễn Văn B",
      email: "nguyenvanb@gmail.com",
    },
    {
      ID: 3,
      name: "Nguyễn Văn C",
      email: "nguyenvanc@gmail.com",
    },
    {
      ID: 4,
      name: "Nguyễn Văn D",
      email: "nguyenvand@gmail.com",
    }
  ];

var table = `<table border="1" width="100%" cellpadding="0" cellspacing="0">

<thead>
    <tr>
        <th>ID</th>
        <th>Tên</th>
        <th>Email</th>
    </tr>
</thead>

</table>`
document.write(table)
for(var i=0;i<customers.length;i++){
  var table1 = `<table border="1" width="100%" cellpadding="0" cellspacing="0">
    <tbody> 
        <tr>             
            <td>${customers[i].ID}</td>
            <td>${customers[i].name}</td>
            <td>${customers[i].email}</td>
        </tr>
    </tbody>
</table>`

document.write(table1)};