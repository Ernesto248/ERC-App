import React from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity, Text } from "react-native";

const ComboBoxForm = () => {
  const handleSubmit = (values) => {
    const paciente = {
      sexo: values.sexo,
      edad: values.edad,
      ecv: values.ecv,
      tabaquismo: values.tabaquismo,
      epoc: values.epoc,
      ecev: values.ecev,
      cancer: values.cancer,
      enf_art_perif: values.enf_art_perif,
      obesidad: values.obesidad,
      desnutricion: values.desnutricion,
      dislipidemia: values.dislipidemia,
      erpad: values.erpad,
      dm: values.dm,
      hta: values.hta,
      glomerulopatia: values.glomerulopatia,
      tas: values.tas,
      tad: values.tad,
      fc: values.fc,
      hb: values.hb,
      albumina: values.albumina,
      urea: values.urea,
      creatinina: values.creatinina,
      fg: values.fg,
      acido_urico: values.acido_urico,
      glucemia: values.glucemia,
      colesterol: values.colesterol,
      tgo: values.tgo,
      tgp: values.tgp,
      calcio: values.calcio,
      potasio: values.potasio,
      atencion_nefrologica: values.atencion_nefrologica,
      inicio_tardio: values.inicio_tardio,
      ccv: values.ccv,
    };

    console.log(paciente);
  };

  return (
    <Formik
      initialValues={{
        sexo: 0,
        edad: 0,
        ecv: 0,
        tabaquismo: 0,
        epoc: 0,
        ecev: 0,
        cancer: 0,
        enf_art_perif: 0,
        obesidad: 0,
        desnutricion: 0,
        dislipidemia: 0,
        erpad: 0,
        dm: 0,
        hta: 0,
        glomerulopatia: 0,
        tas: 0,
        tad: 0,
        fc: 0,
        hb: 0,
        albumina: 0,
        urea: 0,
        creatinina: 0,
        fg: 0,
        acido_urico: 0,
        glucemia: 0,
        colesterol: 0,
        tgo: 0,
        tgp: 0,
        calcio: 0,
        potasio: 0,
        atencion_nefrologica: 0,
        inicio_tardio: 0,
        ccv: 0,
      }}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleSubmit, values }) => (
        <ScrollView contentContainerStyle={styles.form}>
          <Text style={styles.label}>Sexo (0-hombre 1-mujer)</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.sexo}
              onValueChange={handleChange("sexo")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>Edad</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.edad}
              onValueChange={handleChange("edad")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>ECV</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.ecv}
              onValueChange={handleChange("ecv")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>Tabaquismo</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.tabaquismo}
              onValueChange={handleChange("tabaquismo")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>EPOC</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.epoc}
              onValueChange={handleChange("epoc")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>ECEV</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.ecev}
              onValueChange={handleChange("ecev")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>Cáncer</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.cancer}
              onValueChange={handleChange("cancer")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>Enfermedad Arterial Periférica</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.enf_art_perif}
              onValueChange={handleChange("enf_art_perif")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>Obesidad</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.obesidad}
              onValueChange={handleChange("obesidad")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>Desnutrición</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.desnutricion}
              onValueChange={handleChange("desnutricion")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>Dislipidemia</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.dislipidemia}
              onValueChange={handleChange("dislipidemia")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>ERPAD</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.erpad}
              onValueChange={handleChange("erpad")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>DM</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.dm}
              onValueChange={handleChange("dm")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>HTA</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.hta}
              onValueChange={handleChange("hta")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>Glomerulopatía</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.glomerulopatia}
              onValueChange={handleChange("glomerulopatia")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>TAS</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("tas")}
              value={values.tas}
              placeholder="Insertar TAS"
            />
          </View>

          <Text style={styles.label}>TAD</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("tad")}
              value={values.tad}
              placeholder="Insertar TAD"
            />
          </View>

          <Text style={styles.label}>FC</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("fc")}
              value={values.fc}
              placeholder="Insertar FC"
            />
          </View>

          <Text style={styles.label}>HB</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("hb")}
              value={values.hb}
              placeholder="Insertar HB"
            />
          </View>

          <Text style={styles.label}>Albumina</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("albumina")}
              value={values.albumina}
              placeholder="Insertar Albumina"
            />
          </View>

          <Text style={styles.label}>Urea</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("urea")}
              value={values.urea}
              placeholder="Insertar Urea"
            />
          </View>

          <Text style={styles.label}>Creatinina</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("creatinina")}
              value={values.creatinina}
              placeholder="Insertar Creatinina"
            />
          </View>

          <Text style={styles.label}>FG</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("fg")}
              value={values.fg}
              placeholder="Insertar FG"
            />
          </View>

          <Text style={styles.label}>Ácido Úrico</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("acido_urico")}
              value={values.acido_urico}
              placeholder="Insertar Ácido Úrico"
            />
          </View>

          <Text style={styles.label}>Glucemia</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("glucemia")}
              value={values.glucemia}
              placeholder="Insertar Glucemia"
            />
          </View>

          <Text style={styles.label}>Colesterol</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("colesterol")}
              value={values.colesterol}
              placeholder="Insertar Colesterol"
            />
          </View>

          <Text style={styles.label}>TGO</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("tgo")}
              value={values.tgo}
              placeholder="Insertar TGO"
            />
          </View>

          <Text style={styles.label}>TGP</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("tgp")}
              value={values.tgp}
              placeholder="Insertar TGP"
            />
          </View>

          <Text style={styles.label}>Calcio</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("calcio")}
              value={values.calcio}
              placeholder="Insertar Calcio"
            />
          </View>

          <Text style={styles.label}>Potasio</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={handleChange("potasio")}
              value={values.potasio}
              placeholder="Insertar Potasio"
            />
          </View>

          <Text style={styles.label}>Atención Nefrológica</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.atencion_nefrologica}
              onValueChange={handleChange("atencion_nefrologica")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>Inicio Tardío</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.inicio_tardio}
              onValueChange={handleChange("inicio_tardio")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <Text style={styles.label}>CCV</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.ccv}
              onValueChange={handleChange("ccv")}
              style={styles.picker}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Evaluar</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 0,
    justifyContent: "center",
    padding: 16,
    marginTop: 10,
    paddingBottom: 50,
  },
  pickerContainer: {
    height: 50,
    width: "100%",
    marginBottom: 16,
    backgroundColor: "#d3d3d3",
    borderRadius: 8,
    overflow: "hidden",
  },
  picker: {
    height: "100%",
    width: "100%",
  },
  button: {
    height: 50,
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  textInput: {
    textAlign: "center",
    height: "100%",
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default ComboBoxForm;
