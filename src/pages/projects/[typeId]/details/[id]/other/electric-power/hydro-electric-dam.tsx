import { useRouter } from 'next/router';
import HydroElectricDamList from 'src/views/pages/projects/detail/other/electric-power/hydro-electric-dam';
import ProjectOtherLayout from 'src/views/pages/projects/detail/other/layouts/project-other-layout';
import subMenuItems, { findOtherModelName } from '../(subMenuItems)';

function Index() {
  const router = useRouter();
  const { id, typeId } = router.query;
  const baseUrl = `/projects/${typeId}/details/${id}/other`;
  const activeMenu = 8;
  const activeType = 4;
  const activeSubType = 9;

  return (
    <ProjectOtherLayout
      activeMenu={activeMenu}
      activeType={activeType}
      activeSubMenu={activeSubType}
      subMenuItems={subMenuItems}
      baseUrl={baseUrl}
    >
      <HydroElectricDamList
        model={findOtherModelName(subMenuItems(baseUrl), activeType, activeSubType) || ''}
        projectId={String(id)}
        typeId={String(typeId)}
      />
    </ProjectOtherLayout>
  );
}

Index.acl = {
  action: 'view_other',
  subject: 'other'
};

export default Index;