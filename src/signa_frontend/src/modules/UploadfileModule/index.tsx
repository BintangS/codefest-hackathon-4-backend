import DragAndDropUpload from '../../components/dragAndDropUpload';
import AuthenticationCard from '../../components/AuthenticationCard/AuthenticationCard';
import PreviewPDF from '../../components/previewPdf';

const UploadfileModule = () => {
  return (
    <AuthenticationCard>
      <>
        <PreviewPDF documentId = { "test" } /> 
        <DragAndDropUpload />
      </>
    </AuthenticationCard>
  );
};

export default UploadfileModule;