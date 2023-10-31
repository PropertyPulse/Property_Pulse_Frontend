import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import { Button, Modal} from 'flowbite-react';
import InsuaranceDocsUploader from "../../Components/Common/InsuaranceDocsUploader";

const FullReport = ({ formData, onBackToStepper}) => {
  const [pdfVisible, setPdfVisible] = useState(false);
  const [openModal, setOpenModal] = useState();
const props = { openModal,setOpenModal };


// meka wenas karpan upload ekedi

const [selectedInsuaranceDocuments, setSelectedInsuaranceDocuments] = useState();

const handleInsuranceDocumentsSelected = (documents) => {
  setSelectedInsuaranceDocuments(documents);
};



  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      marginLeft: 40,
      margin: 30,
    },
    section: {
      margin: 5, // Reduce the margin between sections
      padding: 5,
      paddingRight: 10, // Reduce the padding between sections
      flexGrow: 1,
      fontSize: 13,
      marginBottom: 5,
      fontWeight: "normal",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10, // Reduce the margin between section titles and content
    },
    text: {
      fontSize: 11,
      margin: 20,
      fontWeight: "normal",
    },

    footer: {
      position: "absolute",
      bottom: 45, // Adjust the distance from the bottom
      textAlign: "center",
      fontSize: 10, // Adjust the font size
    },

    footerText: {
      color: "gray", // Adjust the color
    },
    header: {
      position: "absolute",
      top: 10, // Adjust the distance from the top
      left: 40, // Adjust the distance from the left
      right: 40, // Adjust the distance from the right
      textAlign: "center",
      flexDirection: "row", // Arrange the items in a row
      alignItems: "center", // Center items vertically
    },

    letterheadImage: {
      width: 50, // Adjust the width of the letterhead image
      height: 50, // Adjust the height of the letterhead image
    },

    headerTextContainer: {
      flexDirection: "column", // Arrange the items in a column
      marginLeft: 50, // Adjust the margin between the letterhead image and text
    },

    headerText: {
      fontSize: 12, // Adjust the font size
      fontWeight: "bold",

      color: "gray", // Adjust the color
    },

    customSection: {
      fontSize: 16, // Set your desired font size
      color: "rgba(25, 25, 130)", // Set the color to your desired color
      fontStyle: "italic", // Make it italic
      padding: 10, // Add padding as needed
    },
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        // Add a new View for the header at the top of the page
        <View style={styles.header}>
          {/* Company Letterhead Image */}
          <Image
            source={require("../../Assets/logo-with-bg.jpg")}
            style={styles.letterheadImage}
          />

          {/* Header Text (Vertical Layout) */}
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.customSection}>
                Your Property, Our Priority
              </Text>
            </View>

            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Property Pulse</Text>
              <Text style={styles.headerText}>
                Address: No.508/2/4,Jayamini Building
              </Text>
              <Text style={styles.headerText}>
                Avissawella rd, Kaduwela, Sri Lanka
              </Text>
              <Text style={styles.headerText}>Phone: (+94) 71-356 1825</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ ...styles.section, alignItems: "center" }}>
            <Text style={{ ...styles.title, fontSize: 30, marginTop: 80 }}>
              Valuation Report
            </Text>
          </View>

          <View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Property Owner</Text>
              <Text>Name of Property Owner: {formData.propertyOwnerName}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Property Details</Text>
              <Text>Address of Property: {formData.propertyAddress}</Text>
              <Text>Type of Property: {formData.propertyType}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Area of Property</Text>
              <Text>Build-up Area: {formData.buildUpArea} Sq. Ft.</Text>
              <Text>
                Super Build-up Area: {formData.superBuildUpArea} Sq. Ft.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Value of Property</Text>
              <Text>Market Value : Rs. {formData.marketValue}</Text>
              <Text>Realizable Value : Rs. {formData.realizableValue}</Text>
              <Text>Insurable Value : Rs. {formData.insurableValue}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Valuation Method</Text>
            <Text>
              Land Area Value (Per Sq Ft): Rs. {formData.landAreaValue}
            </Text>
            <Text>
              Super Build-up Area Value (Per Sq Ft): Rs.{" "}
              {formData.superBuildupAreaValue}
            </Text>
            <Text>Total Value: Rs. {formData.totalValue}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Declaration</Text>
            <Text>Declaration: I Hereby Declare That</Text>
            <Text>
              - The information furnished in this report is true and correct to
              my knowledge and belief.
            </Text>
            <Text>
              - I have no direct or indirect interest in the property being
              valued.
            </Text>
            <Text>
              - This report or part shall not be used for any other purpose than
              mentioned in this report.
            </Text>
            <Text>
              - Future life of the property is based on proper maintenance of
              the property.
            </Text>
            <Text>
              - This is only a valuation report and it does not contain any
              legal aspect.
            </Text>
            <Text>- Property is identified by the owner.</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Legal Disclaimer</Text>
          <Text>
            This is electronically generated and considered valid without a
            handwritten signature.
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            ************ This is only use for property pulse company usage.Any
            other commercial usage not allowed ************
          </Text>
        </View>
      </Page>
    </Document>
  );

  const generatePDF = async () => {
    setPdfVisible(true);

    const blob = await pdf(<MyDocument />).toBlob();
    saveAs(blob, "ValuationReport.pdf");
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg" id="full-report">
      <h1 className="text-3xl font-semibold text-center mb-4">
        Valuation Report
      </h1>

      {/* Property Owner */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Property Owner</h2>
        <div>
          <p className="font-semibold">Name of Property Owner:</p>
          <p>{formData.propertyOwnerName}</p>
        </div>
      </section>

      {/* Property Details */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Property Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Address of Property:</p>
            <p>{formData.propertyAddress}</p>
          </div>
          <div>
            <p className="font-semibold">Type of Property:</p>
            <p>{formData.propertyType}</p>
          </div>
        </div>
      </section>

      {/* Area of Property */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Area of Property</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Build-up Area:</p>
            <p>{formData.buildUpArea} Sq. Ft.</p>
          </div>
          <div>
            <p className="font-semibold">Super Build-up Area:</p>
            <p>{formData.superBuildUpArea} Sq. Ft.</p>
          </div>
        </div>
      </section>

      {/* Value of Property */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Value of Property</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Market Value (Rs):</p>
            <p>Rs. {formData.marketValue}</p>
          </div>
          <div>
            <p className="font-semibold">Realizable Value (Rs):</p>
            <p>Rs. {formData.realizableValue}</p>
          </div>
          <div>
            <p className="font-semibold">Insurable Value (Rs):</p>
            <p>Rs. {formData.insurableValue}</p>
          </div>
        </div>
      </section>

      {/* Valuation Method */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Valuation Method</h2>
        <div>
          <p className="font-semibold">Land Area Value (Per Sq Ft):</p>
          <p>Rs. {formData.landAreaValue}</p>
        </div>
        <div>
          <p className="font-semibold">
            Super Build-up Area Value (Per Sq Ft):
          </p>
          <p>Rs. {formData.superBuildupAreaValue}</p>
        </div>
        <div>
          <p className="font-semibold">Total Value:</p>
          <p>Rs. {formData.totalValue}</p>
        </div>
      </section>

      {/* Declaration */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Declaration</h2>
        <p>
          <strong>Declaration:</strong> I Hereby Declare That
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            The information furnished in this report is true and correct to my
            knowledge and belief.
          </li>
          <li>
            I have no direct or indirect interest in the property being valued.
          </li>
          <li>
            This report or part shall not be used for any other purpose than
            mentioned in this report.
          </li>
          <li>
            Future life of the property is based on proper maintenance of the
            property.
          </li>
          <li>
            This is only a valuation report and it does not contain any legal
            aspect.
          </li>
          <li>Property is identified by the owner.</li>
        </ul>
      </section>
      <div className="button-container mt-4 flex justify-between">
        <button
          onClick={onBackToStepper}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={() => {
            generatePDF();
            setOpenModal("Upload"); // Set the modal key to "Upload"
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover-bg-red-600"
        >
          Generate PDF
        </button>

        {/* Modal for upload downloaded document */}
        <Modal show={props.openModal === 'Upload'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Upload the Document</Modal.Header>
        <Modal.Body>
        <div className="w-full">
            <label>Upload the Document</label>

            <InsuaranceDocsUploader
            OnFilesUpload={handleInsuranceDocumentsSelected}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>Upload</Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

      </div>

      {pdfVisible && (
        <div className="mt-4">
          <PDFViewer width="100%" height={500}>
            <MyDocument />
          </PDFViewer>
        </div>
      )}
    </div>
  );
};

export default FullReport;
