import React from "react";
import { Routes, Route } from "react-router-dom";
import { Aesthetics } from "./pages/aesthetics";
import { Career } from "./pages/career";
import { Finances } from "./pages/finances";
import { FitnessHealth } from "./pages/fitnesshealth";
import { Locs } from "./pages/locs";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notfound";
import { SkillHabit } from "./pages/skillhabit";
import { Travel } from "./pages/travel";
import { RickMorty } from "./pages/rickmorty";
import { UploadPhotos } from "./pages/upload";
import { Cooking } from "./pages/cooking";
import { Reading } from "./pages/reading";
import { Habits } from "./pages/habits";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aesthetics" element={<Aesthetics />} />
      <Route path="/career" element={<Career />} />
      <Route path="/finances" element={<Finances />} />
      <Route path="/fitnesshealth" element={<FitnessHealth />} />
      <Route path="/locs" element={<Locs />} />
      <Route path="/skillhabit" element={<SkillHabit />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/rickmorty" element={<RickMorty />} />
      <Route path="/upload" element={<UploadPhotos />} />
      <Route path="/cooking" element={<Cooking />} />
      <Route path="/reading" element={<Reading />} />
      <Route path="/habits" element={<Habits/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
