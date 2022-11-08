import axios from "axios";
import Layout from "../../components/layout";

export default function Covid({ data }) {
  return (
    <Layout>
      {!data ? <div>Loading</div> : <h1>Vietnam`s COVID-19 Information</h1>}
      <section className="intro">
        <div className="gradient-custom-1 h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="table-responsive bg-white">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th className="text-center" scope="col">
                            Date
                          </th>
                          <th className="text-center" scope="col">
                            Confirmed
                          </th>
                          <th className="text-center" scope="col">
                            Active
                          </th>
                          <th className="text-center" scope="col">
                            Recovered
                          </th>
                          <th className="text-center" scope="col">
                            Deaths
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.length > 0 &&
                          data.map((item, index) => (
                            <tr key={index}>
                              <td className="text-center">{item.Date}</td>
                              <td className="text-center">{item.Confirmed}</td>
                              <td className="text-center">{item.Active}</td>
                              <td className="text-center">{item.Recovered}</td>
                              <td className="text-center">{item.Deaths}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const response = await axios.get(
    "https://api.covid19api.com/total/country/vietnam"
  );
  return {
    props: {
      data: response.data,
    },
  };
};
