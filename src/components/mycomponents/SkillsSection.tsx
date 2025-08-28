'use client';

import React, { useState, useEffect } from 'react';

interface Skill {
  id: string;
  name: string;
  percentage: number;
}

interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

const SkillsSection: React.FC = () => {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([
    {
      id: 'marketing',
      title: 'Marketing Skills',
      skills: [
        { id: 'digital-marketing', name: 'Digital Marketing', percentage: 95 },
        { id: 'seo-sem', name: 'SEO & SEM', percentage: 90 },
        { id: 'social-media', name: 'Social Media Strategy', percentage: 88 },
        { id: 'analytics', name: 'Performance Analytics', percentage: 92 }
      ]
    },
    {
      id: 'development',
      title: 'Development Skills',
      skills: [
        { id: 'react-js', name: 'React & JavaScript', percentage: 94 },
        { id: 'node-backend', name: 'Node.js & Backend', percentage: 91 },
        { id: 'cloud-devops', name: 'Cloud & DevOps', percentage: 85 },
        { id: 'database', name: 'Database Design', percentage: 89 }
      ]
    }
  ]);

  const [newSkill, setNewSkill] = useState({ name: '', percentage: 50, categoryId: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingSkill, setEditingSkill] = useState<{ categoryId: string; skillId: string; name: string; percentage: number } | null>(null);
  const [animatedPercentages, setAnimatedPercentages] = useState<{ [key: string]: number }>({});

  // Animate skill bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const percentages: { [key: string]: number } = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          percentages[skill.id] = skill.percentage;
        });
      });
      setAnimatedPercentages(percentages);
    }, 500);

    return () => clearTimeout(timer);
  }, [skillCategories]);

  const addSkill = () => {
    if (newSkill.name.trim() && newSkill.categoryId) {
      const newSkillData: Skill = {
        id: `skill-${Date.now()}`,
        name: newSkill.name.trim(),
        percentage: newSkill.percentage
      };

      setSkillCategories(prev => prev.map(category => {
        if (category.id === newSkill.categoryId) {
          return {
            ...category,
            skills: [...category.skills, newSkillData]
          };
        }
        return category;
      }));

      setNewSkill({ name: '', percentage: 50, categoryId: '' });
      setShowAddForm(false);
    }
  };



  return (
    <section className=" bg-gradient-to-tr from-gray-950 via-gray-900 to-red-950 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Our Expertise
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            The tools and technologies we master to deliver exceptional results.
          </p>
          
          {/* Developer Controls */}
          
        </div>

        {/* Add Skill Form */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-center">Add New Skill</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={newSkill.categoryId}
                    onChange={(e) => setNewSkill(prev => ({ ...prev, categoryId: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    {skillCategories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Skill Name</label>
                  <input
                    type="text"
                    value={newSkill.name}
                    onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="e.g., TypeScript"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Percentage: {newSkill.percentage}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={newSkill.percentage}
                    onChange={(e) => setNewSkill(prev => ({ ...prev, percentage: parseInt(e.target.value) }))}
                    className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <button
                  onClick={addSkill}
                  className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all duration-300"
                >
                  Add Skill
                </button>
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setNewSkill({ name: '', percentage: 50, categoryId: '' });
                  }}
                  className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
            >
              <h2 className="text-2xl font-bold mb-8 text-center text-white">
                {category.title}
              </h2>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.id} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3 flex-1">
                        {editingSkill?.skillId === skill.id ? (
                          <input
                            type="text"
                            value={editingSkill.name}
                            onChange={(e) => setEditingSkill(prev => prev ? { ...prev, name: e.target.value } : null)}
                            className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm flex-1"
                          />
                        ) : (
                          <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        )}
                        
                        
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {editingSkill?.skillId === skill.id ? (
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={editingSkill.percentage}
                            onChange={(e) => setEditingSkill(prev => prev ? { ...prev, percentage: parseInt(e.target.value) } : null)}
                            className="w-20 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                          />
                        ) : null}
                        <span className="text-red-400 font-bold text-lg min-w-[3rem] text-right">
                          {editingSkill?.skillId === skill.id ? editingSkill.percentage : skill.percentage}%
                        </span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${animatedPercentages[skill.id] || 0}%`,
                        }}
                      />
                      
                      {/* Glow Effect */}
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-400 to-red-300 rounded-full opacity-50 blur-sm transition-all duration-1000 ease-out"
                        style={{
                          width: `${animatedPercentages[skill.id] || 0}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #dc2626, #ef4444);
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #dc2626, #ef4444);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;