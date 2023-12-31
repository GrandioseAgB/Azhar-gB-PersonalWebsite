import { Helmet } from 'react-helmet-async';

import { CurriculumVitaeView } from 'src/sections/curriculumVitae/view';

// ----------------------------------------------------------------------

export default function CurriculmVitaePage() {
  return (
    <>
      <Helmet>
        <title> Curriculm Vitae | Azhar gB </title>
      </Helmet>

      <CurriculumVitaeView />
    </>
  );
}
