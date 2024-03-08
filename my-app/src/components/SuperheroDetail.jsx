import { useSuperheroData } from "../hooks/useSuperheroData";

import { Link,useNavigate, useParams } from "react-router-dom";

function SuperheroDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

const {data} = useSuperheroData(id)


  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className="superhero-box">
      <Link
        to=".."
        onClick={(e) => goBack(e)}
      >
        Go back to Superheros
      </Link>
      <div>
<h3>Name: {data?.data.name}</h3>
<h3>Alter Ego: {data?.data.alterEgo}</h3>
</div>
    </div>
  );
}

export default SuperheroDetail;
