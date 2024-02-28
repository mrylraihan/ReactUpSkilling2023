const ServerSidePage = ({ data }) => {
  const people = data.data.allPeople.people;

	return (
		<div className="mx-auto max-w-2xl p-2">
			<h1 className="text-2xl font-bold">serverside pages</h1>
      {people.map((person, i) => (
        <div className="my-2 py-4 border hover:border-8 rounded-sm shadow-sm text-center" key={person.id}>
          <h2>{i}: {person.name}</h2>
        </div>
      ))}
		</div>
	);
};

export default ServerSidePage;

export async function getServerSideProps() {
	const data = await getCharsQuery();
	return { props: { data } };
}

export async function getSwapiData(query) {
	const res = await fetch("https://swapi-graphql.netlify.app/.netlify/functions/index", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ query }),
	});
	const data = await res.json();
	return data;
}

export async function getCharsQuery() {
	const chars = await getSwapiData(
		` query Query {
        allPeople {
          people {
            birthYear
            created
            id
            name
          }
        }
      }
    
  `
	);
	return chars;
}
