import React from 'react'
import { Formik } from 'formik'
import './App.css'

function App() {
  const REGEX = {
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  }

  const handleFormSubmit = () => {
    alert('Khai báo thành công!')
  }

  return (
    <Formik
      initialValues={{
        username: '',
        idNumber: '',
        yearOfBird: '',
        gender: 'male',
        nationality: '',
        company: '',
        department: '',
        insuranceCard: false,
        province: '',
        district: '',
        ward: '',
        address: '',
        phone: '',
        email: '',
        wentTo: '',
        symptoms: [],
        contact: []
      }}

      onSubmit={handleFormSubmit}
      validate={(values) => {
        const errors = {};

        if (!values.username) {
          errors.username = 'Họ tên không được để trống'
        }

        if (!values.idNumber) {
          errors.idNumber = 'Số hộ chiếu/CMND không được để trống'
        }

        if (!values.yearOfBird) {
          errors.yearOfBird = 'Năm sinh không được để trống'
        } else if ((parseInt(values.yearOfBird) < 1901) || (parseInt(values.yearOfBird) > new Date().getFullYear())) {
          errors.yearOfBird = 'Năm sinh không được nhỏ hơn 1900 hoặc lớn hơn năm hiện tại'
        }

        if (!values.nationality) {
          errors.nationality = 'Quốc tịch không được để trống'
        }

        if (!values.province) {
          errors.province = 'Tỉnh thành không được để trống'
        }

        if (!values.district) {
          errors.district = 'Quận/Huyện không được để trống'
        }

        if (!values.ward) {
          errors.ward = 'Phường/Xã không được để trống'
        }

        if (!values.address) {
          errors.address = 'Địa chỉ nhà không được để trống'
        }

        if (!values.phone) {
          errors.phone = 'Số điện thoại không được để trống'
        }

        if (!values.email) {
          errors.email = 'Email không được để trống'
        } else if (!REGEX.email.test(values.email)) {
          errors.email = 'Email nhập vào chưa đúng'
        }

        return errors
      }}
    >
      {({ values, errors, handleChange, handleSubmit, touched, setFieldTouched }) => (
        <div className='main'>
          <form id='form-1' className='form' onSubmit={handleSubmit}>
            <h3 className='heading'>Tờ khai y tế</h3>

            <div className={`form-group ${errors.username && touched.username ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='username'>
                Họ tên
              </label>
              <input
                name='username'
                id='username'
                placeholder='VD: Trịnh Sơn'
                className='form-control'
                value={values.username}
                onChange={handleChange}
                onBlur={() => setFieldTouched('username', true)}
              />
              {errors.username && touched.username && <span className='form-message'>{errors.username}</span>}
            </div>

            <div className={`form-group ${errors.idNumber && touched.idNumber ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='idNumber'>
                Số hộ chiếu / CMND
              </label>
              <input
                type='number'
                name='idNumber'
                id='idNumber'
                placeholder='VD: 0123456789xx'
                className='form-control'
                value={values.idNumber}
                onChange={handleChange}
                onBlur={() => setFieldTouched('idNumber', true)}
              />
              {errors.idNumber && touched.idNumber && <span className='form-message'>{errors.idNumber}</span>}
            </div>

            <div className={`form-group ${errors.yearOfBird && touched.yearOfBird ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='yearOfBird'>
                Năm sinh
              </label>
              <input
                type='number'
                name='yearOfBird'
                id='yearOfBird'
                placeholder='VD: 1999'
                className='form-control'
                value={values.yearOfBird}
                onChange={handleChange}
                onBlur={() => setFieldTouched('yearOfBird', true)}
              />
              {errors.yearOfBird && touched.yearOfBird && <span className='form-message'>{errors.yearOfBird}</span>}
            </div>

            <div className={`form-group ${errors.gender && touched.gender ? 'invalid' : ''}`}>
              <label className='form-label'>
                Giới tính
              </label>
              <div className='form-inline'>
                <input type='radio' name='gender' value='male' id='male' onChange={handleChange} defaultChecked={values.gender === 'male'} /><label htmlFor='male'>Male</label>
              </div>
              <div className='form-inline'>
                <input type='radio' name='gender' value='female' id='female' onChange={handleChange} defaultChecked={values.gender === 'female'} /><label htmlFor='female'>Female</label>
              </div>
              {errors.gender && touched.gender && <span className='form-message'>{errors.gender}</span>}
            </div>

            <div className={`form-group ${errors.nationality && touched.nationality ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='nationality'>
                Quốc tịch
              </label>
              <input
                name='nationality'
                id='nationality'
                placeholder='VD: Việt Nam'
                className='form-control'
                value={values.nationality}
                onChange={handleChange}
                onBlur={() => setFieldTouched('nationality', true)}
              />
              {errors.nationality && touched.nationality && <span className='form-message'>{errors.nationality}</span>}
            </div>

            <div className={`form-group ${errors.company && touched.company ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='company'>
                Công ty làm việc
              </label>
              <input
                name='company'
                id='company'
                placeholder='VD: Công ty TNHH ABC'
                className='form-control'
                value={values.company}
                onChange={handleChange}
                onBlur={() => setFieldTouched('company', true)}
              />
              {errors.company && touched.company && <span className='form-message'>{errors.company}</span>}
            </div>

            <div className={`form-group ${errors.department && touched.department ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='department'>
                Bộ phận làm việc
              </label>
              <input
                name='department'
                id='department'
                placeholder='VD: Marketing'
                className='form-control'
                value={values.department}
                onChange={handleChange}
                onBlur={() => setFieldTouched('department', true)}
              />
              {errors.department && touched.department && <span className='form-message'>{errors.department}</span>}
            </div>

            <div className={`form-group ${errors.insuranceCard && touched.insuranceCard ? 'invalid' : ''}`}>
            <div className='form-inline'>
              <label className='form-label' htmlFor='insuranceCard'>  
                Có thẻ bảo hiểm y tế
              </label>
              <input type='checkbox' name='insuranceCard' value='insuranceCard' id='insuranceCard' onChange={handleChange} />
            </div>
              {errors.insuranceCard && touched.insuranceCard && <span className='form-message'>{errors.insuranceCard}</span>}
            </div>

            <h3 className='heading'>Địa chỉ liên lạc tại Việt Nam</h3>

            <div className={`form-group ${errors.province && touched.province ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='province'>
                Tỉnh thành
              </label>
              <input
                name='province'
                id='province'
                placeholder='VD: Hà Nội'
                className='form-control'
                value={values.province}
                onChange={handleChange}
                onBlur={() => setFieldTouched('province', true)}
              />
              {errors.province && touched.province && <span className='form-message'>{errors.province}</span>}
            </div>

            <div className={`form-group ${errors.district && touched.district ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='district'>
                Quận/Huyện
              </label>
              <input
                name='district'
                id='district'
                placeholder='VD: Thanh Xuân'
                className='form-control'
                value={values.district}
                onChange={handleChange}
                onBlur={() => setFieldTouched('district', true)}
              />
              {errors.district && touched.district && <span className='form-message'>{errors.district}</span>}
            </div>

            <div className={`form-group ${errors.ward && touched.ward ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='ward'>
                Phường/Xã
              </label>
              <input
                name='ward'
                id='ward'
                placeholder='VD: Thanh Xuân Bắc'
                className='form-control'
                value={values.ward}
                onChange={handleChange}
                onBlur={() => setFieldTouched('ward', true)}
              />
              {errors.ward && touched.ward && <span className='form-message'>{errors.ward}</span>}
            </div>

            <div className={`form-group ${errors.address && touched.address ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='address'>
                Số nhà, phố, tổ dân phố/thôn/đội
              </label>
              <input
                name='address'
                id='address'
                placeholder='VD: Số xx, đường xyz, ...'
                className='form-control'
                value={values.address}
                onChange={handleChange}
                onBlur={() => setFieldTouched('address', true)}
              />
              {errors.address && touched.address && <span className='form-message'>{errors.address}</span>}
            </div>

            <div className={`form-group ${errors.phone && touched.phone ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='phone'>
                Điện thoại
              </label>
              <input
                type='number'
                name='phone'
                id='phone'
                placeholder='VD: 09xxxxxxxx'
                className='form-control'
                value={values.phone}
                onChange={handleChange}
                onBlur={() => setFieldTouched('phone', true)}
              />
              {errors.phone && touched.phone && <span className='form-message'>{errors.phone}</span>}
            </div>

            <div className={`form-group ${errors.email && touched.email ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='email'>
                Email
              </label>
              <input
                name='email'
                id='email'
                placeholder='VD: email@domain.com'
                className='form-control'
                value={values.email}
                onChange={handleChange}
                onBlur={() => setFieldTouched('email', true)}
              />
              {errors.email && touched.email && <span className='form-message'>{errors.email}</span>}
            </div>

            <div className={`form-group ${errors.wentTo && touched.wentTo ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='wentTo'>
                Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)
              </label>
              <textarea
                id='wentTo'
                className='form-control'
                name='wentTo'
                rows={4}
                cols={50}
                placeholder='Tôi đã đi đến ...'
                value={values.wentTo}
                onChange={handleChange}
                onBlur={() => setFieldTouched('wentTo', true)}
              ></textarea>
              {errors.wentTo && touched.wentTo && <span className='form-message'>{errors.wentTo}</span>}
            </div>

            <div className={`form-group ${errors.symptoms && touched.symptoms ? 'invalid' : ''}`}>
              <label className='form-label'>
                Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?
              </label>
              <div className='form-inline'>
                <input type='checkbox' name='symptoms' value='fever' id='fever' onChange={handleChange} /><label htmlFor='fever'>Sốt</label>
              </div>
              <div className='form-inline'>
                <input type='checkbox' name='symptoms' value='cough' id='cough' onChange={handleChange} /><label htmlFor='cough'>Ho</label>
              </div>
              <div className='form-inline'>
                <input type='checkbox' name='symptoms' value='shortnessOfBreath' id='shortnessOfBreath' onChange={handleChange} /><label htmlFor='shortnessOfBreath'>Khó thở</label>
              </div>
              <div className='form-inline'>
                <input type='checkbox' name='symptoms' value='pneumonia' id='pneumonia' onChange={handleChange} /><label htmlFor='pneumonia'>Viêm phổi</label>
              </div>
              <div className='form-inline'>
                <input type='checkbox' name='symptoms' value='sorethroat' id='sorethroat' onChange={handleChange} /><label htmlFor='sorethroat'>Đau họng</label>
              </div>
              <div className='form-inline'>
                <input type='checkbox' name='symptoms' value='tired' id='tired' onChange={handleChange} /><label htmlFor='tired'>Mệt mỏi</label>
              </div>
              {errors.symptoms && touched.symptoms && <span className='form-message'>{errors.symptoms}</span>}
            </div>

            <div className={`form-group ${errors.contact && touched.contact ? 'invalid' : ''}`}>
              <label className='form-label'>
                Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với:
              </label>
              <div className='form-inline'>
                <input type='checkbox' name='contact' value='patient' id='patient' onChange={handleChange} /><label htmlFor='patient'>Người bệnh hoặc nghi ngờ mắc bệnh COVID-19</label>
              </div>
              <div className='form-inline'>
                <input type='checkbox' name='contact' value='country' id='country' onChange={handleChange} /><label htmlFor='country'>Người từ quốc gia có bệnh COVID-19</label>
              </div>
              <div className='form-inline'>
                <input type='checkbox' name='contact' value='symptom' id='symptom' onChange={handleChange} /><label htmlFor='symptom'>Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</label>
              </div>
              {errors.contact && touched.contact && <span className='form-message'>{errors.contact}</span>}
            </div>

            <button type='submit' className='form-submit'>
              Submit
            </button>
          </form>
        </div>
      )}

    </Formik>
  )
}

export default App
