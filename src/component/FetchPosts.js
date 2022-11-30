import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { baseURL } from "..";

function FetchPosts() {
  const [data, setData] = useState([]);
  const getPosts = async () => {
    await axios.get(`${baseURL}users`).then((dat) => {
      setData(dat.data);
    });
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <div className="container table-responsive">
        <Table className="table-striped table-sm table-hover table-light table-border">
          <thead>
            <tr className="text-start text-nowrap text-capitalize">
              <th>#</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>website</th>
              <th>city</th>
              <th>street</th>
              <th>suite</th>
              <th>zipcode</th>
              <th>company bs</th>
              <th>company catchPhrase</th>
              <th>company name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => (
              <tr className="text-start text-nowrap" key={index}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
                <td>{value.website}</td>
                <td>{value.address.city}</td>
                <td>{value.address.street}</td>
                <td>{value.address.suite}</td>
                <td>{value.address.zipcode}</td>
                <td>{value.company.bs}</td>
                <td>{value.company.catchPhrase}</td>
                <td>{value.company.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default FetchPosts;
