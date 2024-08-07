
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ShowData = ({ skills }) => {
    return (
        <ul className="list-group">
            {skills.map(skill => (
                <li key={skill.id} className="list-group-item">
                    {skill.title}
                </li>
            ))}
        </ul>
    );
};

const Form = ({ addSkill }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const newSkill = {
            id: Math.random().toString(36).substring(2, 9), 
            title: data.title
        };
        addSkill(newSkill);
        reset(); 
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
            <div className="form-group">
                <label htmlFor="title">Skill</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    {...register('title', { required: true })}
                    placeholder="Enter skill"
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Skill</button>
        </form>
    );
};

// Main Skill Component
const Skill = () => {
    const [skills, setSkills] = useState([]);

    const addSkill = skill => {
        setSkills([...skills, skill]);
    };

    const resetSkills = () => {
        setSkills([]);
    };
    return (
        <div className="container mt-5">
            <h2 className="mb-4">My Skills</h2>
            <Form addSkill={addSkill} />
            <ShowData skills={skills} />
            <button className="btn btn-danger mt-4" onClick={resetSkills}>Reset Skills</button>
        </div>
      
    );
};

export default Skill;

