import { useEffect, useState } from "react";

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        async function load() {
            const res = await fetch("http://localhost:3000/team");
            const data = await res.json();
            setTeamMembers(data);
        }
        load();
    }, []);

    return (
        <section id="team" className="mt-20 mb-28 mx-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Meet the Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers?.map(member => (
                        <div key={member.name} className="bg-slate-100 shadow-md rounded-lg">
                            <div className="h-60 overflow-hidden">
                                <img src={member.image} alt={member.name} className="w-full rounded-lg mb-4" />
                            </div>
                            <h3 className="text-2xl font-bold mt-4">{member.name}</h3>
                            <p className="text-lg mb-5">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Team