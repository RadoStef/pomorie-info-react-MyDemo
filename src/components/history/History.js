import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import coverImage from "../../assets/museums/museum/museum.jpg";
import "./History.css";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    maginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 13,
    margnBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export const History = () => {
  return (
    <Document className='history-wrapper' title='Historical museum of Pomorie.' author='Radoslav Stefanov'>
      <Page style={styles.body}>
        <Text style={styles.header}></Text>
        <Image style={styles.image} src={coverImage} />
        <Text style={styles.text}>
          Historical museum of Pomorie: The museum is located in the old part of
          the city. The building is announced as an architectural monument with
          local meaning. In its halls are displayed exhibits from the department
          of Archeology, Ethnography, New and Newest history. The archeological
          exhibit is located in a few halls: “Prehistorian”, “Pre-Roman
          Anhialo”, “Roman and Medieval Anhialo”, “Numismatics”. In the museum
          exhibition its exposed the life in the region of Pomorie from the
          earliest antiquity to Renaissance. In the halls of the museum is
          displayed the rich diversity in the culture of people in Pomorie for
          XIX and the beginning of XX century. There are exhibits and old
          photos, and layouts as well.
        </Text>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`}/>
      </Page>
    </Document>
  );
};
