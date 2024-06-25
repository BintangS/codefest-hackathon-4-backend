import DragAndDropUpload from '../../components/dragAndDropUpload';
import AuthenticationCard from '../../components/elements/AuthenticationCard/AuthenticationCard';
import PreviewPDF from '../../components/previewPdf';

const UploadfileModule = () => {
  return (
    <AuthenticationCard>
      <>
        <PreviewPDF /> 
        <DragAndDropUpload />
      </>
    </AuthenticationCard>
  );
};

export default UploadfileModule;