import React from 'react';
import '../App.css';

function EducationalImpact() {
  return (
    <section id="impact" className="educational-impact">
      <h2>Educational Impact</h2>
      <p>
        RecycleQuest is more than just a game—it's a powerful educational tool for school children. Here's how it helps:
      </p>
      <ul className="impact-list">
        <li>Teaches children the importance of recycling and sustainability.</li>
        <li>Encourages critical thinking and decision-making skills.</li>
        <li>Raises awareness about environmental conservation.</li>
        <li>Makes learning fun and interactive through gamification.</li>
      </ul>
      <div className="testimonial">
        <blockquote>
          "RecycleQuest has transformed the way our students learn about the environment. They love playing the game and are now more conscious about recycling in their daily lives."
        </blockquote>
        <p>- Mrs. Smith, 5th Grade Teacher</p>
      </div>
    </section>
  );
}

export default EducationalImpact;