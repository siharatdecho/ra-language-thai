module.exports = {
    ra: {
        action: {
            add_filter: 'เพิ่มตัวกรอง',
            add: 'เพิ่ม',
            back: 'ย้อนกลับ',
            bulk_actions: '1 รายการที่ถูกเลือก |||| %{smart_count} รายการที่ถูกเลือก',
            cancel: 'ยกเลิก',
            clear_input_value: 'ล้างค่า',
            clone: 'โคลน',
            confirm: 'ยืนยัน',
            create: 'สร้าง',
            delete: 'ลบ',
            edit: 'แก้ไข',
            export: 'นำออก',
            list: 'รายการ',
            refresh: 'รีเฟรช',
            remove_filter: 'ลบตัวกรอง',
            remove: 'ลบออก',
            save: 'บันทึก',
            search: 'ค้นหา',
            show: 'แสดง',
            sort: 'เรียงลำดับ',
            undo: 'เลิกทำ',
            unselect: 'ยกเลิกการเลือก',
            expand: 'ขยาย',
            close: 'ปิด',
            open_menu: 'เปิดเมนู',
            close_menu: 'ปิดเมนู',
        },
        boolean: {
            true: 'จริง',
            false: 'เท็จ',
            null: ' ',
        },
        page: {
            create: 'สร้าง %{name}',
            dashboard: 'แดชบอร์ด',
            edit: '%{name} #%{id}',
            error: 'เกิดข้อผิดพลาด',
            list: '%{name}',
            loading: 'กำลังโหลด',
            not_found: 'ไม่พบข้อมูล',
            show: '%{name} #%{id}',
            empty: 'ยังไม่มี %{name}',
            invite: 'ต้องการเพิ่มหรือไม่?',
        },
        input: {
            file: {
                upload_several: 'วางไฟล์ที่ต้องการอัปโหลดหรือคลิกเพื่อเลือก',
                upload_single: 'วางไฟล์ที่ต้องการอัปโหลดหรือคลิกเพื่อเลือก',
            },
            image: {
                upload_several: 'วางรูปภาพที่ต้องการอัปโหลดหรือคลิกเพื่อเลือก',
                upload_single: 'วางรูปภาพที่ต้องการอัปโหลดหรือคลิกเพื่อเลือก'
            },
            references: {
                all_missing: 'ไม่พบข้อมูลที่อ้างอิง',
                many_missing: 'การอ้างอิงที่เกี่ยวข้องอย่างน้อยหนึ่งรายการที่ไม่พบข้อมูล',
                single_missing: 'ไม่พบข้อมูลจากการอ้างอิงที่เกี่ยวข้อง',
            },
            password: {
                toggle_visible: 'ซ่อนรหัสผ่าน',
                toggle_hidden: 'แสดงรหัสผ่าน',
            },
        },
        message: {
            about: 'เกี่ยวกับ',
            are_you_sure: 'คุณแน่ใจหรือไม่?',
            bulk_delete_content: 'คุณแน่ใจหรือไม่ว่าต้องการลบ %{name}? |||| คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลทั้ง %{smart_count} รายการ?',
            bulk_delete_title: 'ลบ %{name} |||| ลบ %{smart_count} %{name}',
            delete_content: 'คุณแน่ใจหรือไม่ว่าต้องการลบสิ่งนี้?',
            delete_title: 'ลบ %{name} #%{id}',
            details: 'รายละเอียด',
            error: 'เกิดข้อผิดพลาดของ client ไม่สามารถดำเนินการตาม request ได้',
            invalid_form: 'แบบฟอร์มไม่ถูกต้อง โปรดตรวจสอบข้อผิดพลาด',
            loading: 'กำลังโหลด โปรดรอสักครู่',
            no: 'ไม่',
            not_found: 'พิมพ์ URL ผิดหรือเข้าลิงก์ที่ไม่ถูกต้อง',
            yes: 'ใช่',
            unsaved_changes: 'ยังไม่ได้บันทึกการเปลี่ยนแปลงข้อมูล คุณแน่ใจที่จะละทิ้งหรือไม่?',
        },
        navigation: {
            no_results: 'ไม่พบผลลัพธ์ที่ค้นหา',
            no_more_results: 'จำนวนหน้า %{page} เกินจำนวนหน้าทั้งหมด',
            page_out_of_boundaries: 'หน้าที่ %{page} เกินจำนวนหน้าทั้งหมด',
            page_out_from_end: 'เกินจำนวนหน้าสุดท้าย',
            page_out_from_begin: 'เกินจำนวนหน้าแรก',
            page_range_info: '%{offsetBegin}-%{offsetEnd} จาก %{total}',
            page_rows_per_page: 'จำนวนแถวต่อหน้า:',
            next: 'ถัดไป',
            prev: 'ย้อนกลับ',
        },
        sort: {
            sort_by: 'เรียงลำดับโดย %{field} %{order}',
            ASC: 'น้อยไปมาก',
            DESC: 'มากไปน้อย',
        },
        auth: {
            auth_check_error: 'เข้าระบบเพื่อดำเนินการต่อ',
            user_menu: 'โปรไฟล์',
            username: 'ชื่อผู้ใช้งาน',
            password: 'รหัสผ่าน',
            sign_in: 'เข้าระบบ',
            sign_in_error: 'การเข้าระบบล้มเหลว',
            logout: 'ออกจากระบบ',
        },
        notification: {
            updated: 'ปรับปรุงอีลีเมนท์แล้ว |||| ปรับปรุงอีลีเมนท์ %{smart_count} รายการแล้ว',
            created: 'สร้างอีลีเมนท์แล้ว',
            deleted: 'ลบอีลีเมนท์แล้ว |||| ลบอีลีเมนท์ %{smart_count} รายการแล้ว',
            bad_item: 'อีลีเมนท์ไม่ถูกต้อง',
            item_doesnt_exist: 'ไม่มีอีลีเมนท์',
            http_error: 'เกิดข้อผิดพลาดในการเชื่อมต่อกับเครือข่าย',
            data_provider_error: 'เกิดข้อผิดพลาดของ dataProvider โปรดตรวจสอบรายละเอียดจาก console',
            i18n_error: 'ไม่สามารถโหลดคำแปลภาษาที่ระบุได้',
            canceled: 'ยกเลิกการดำเนินการ',
            logged_out: 'session หมดอายุ โปรดเชื่อมต่อใหม่',
        },
        validation: {
            required: 'จำเป็น',
            minLength: 'ต้องไม่น้อยกว่า %{min} ตัวอักษร',
            maxLength: 'ต้องไม่เกินกว่า %{max} ตัวอักษร',
            minValue: 'ต้องไม่น้อยกว่า %{min}',
            maxValue: 'ต้องไม่เกินกว่า %{max}',
            number: 'ต้องเป็นตัวเลขเท่านั้น',
            email: 'ต้องเป็นรูปแบบอีเมลที่ถูกต้อง',
            oneOf: 'ต้องเป็นหนึ่งใน: %{options}',
            regex: 'ต้องตรงกับรูปแบบเฉพาะ (regexp): %{pattern}',
        },
    },
};
