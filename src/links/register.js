import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Register = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Mail: '',
    Number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://localhost:7156/api/User', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        // İsteğin başarılı olduğunu kontrol edin
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: ''
        });
        // Başarılı bir mesaj gösterin
        showToast('Başarılı', 'Kayıt işlemi başarıyla tamamlandı', 'success');
        return response.json();
      } else {
        // Başarısız durumları ele alın
        throw new Error('Kaydetme işlemi başarısız oldu');
      }
    })
    .then(data => console.log(data))
    .catch(error => {
      console.error('Kaydetme işlemi başarısız oldu:', error);
      showToast('Hata', 'Kayıt işlemi başarısız oldu', 'error');
    });

    const showToast = (title, message, type) => {
      // Toaster ile bir bildirim göstermek için gerekli kodu burada yazın
    };
    console.log(formData);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2>Kayıt Formu</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="FirstName">
              <Form.Label>Ad</Form.Label>
              <Form.Control
                type="text"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                placeholder="Adınızı Girin"
              />
            </Form.Group>

            <Form.Group controlId="LastName">
              <Form.Label>Soyad</Form.Label>
              <Form.Control
                type="text"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                placeholder="Soyadınızı Girin"
              />
            </Form.Group>

            <Form.Group controlId="Mail">
              <Form.Label>Email Adresi</Form.Label>
              <Form.Control
                type="text"
                name="Mail"
                value={formData.Mail}
                onChange={handleChange}
                placeholder="Email Adresinizi Girin"
              />
            </Form.Group>

            <Form.Group controlId="Number">
              <Form.Label>Telefon Numarası</Form.Label>
              <Form.Control
                type="text"
                name="Number"
                value={formData.Number}
                onChange={handleChange}
                placeholder="Telefon Numaranızı Girin"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Gönder
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;