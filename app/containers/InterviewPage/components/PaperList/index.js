/**
 *
 * PaperList
 *
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

export function PaperList() {
  return (
    <Paper>
      <Typography variant="h4" style={{ padding: '15px 0px' }}>
        CÂU HỎI PHỎNG VẤN
      </Typography>
      <Divider variant="middle" />
      <Paper style={{ padding: 30, textAlign: 'left' }}>
        <Typography variant="h3" style={{ color: '#ef5350' }} gutterBottom>
          A. Động cơ xét tuyển thành viên và quan tâm đến công việc
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          1. Vì sao anh chị nộp đơn tham gia vào kì thi tuyển thành viên CLB Tin
          học HIT?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          2. Anh chị có nhận xét gì về CLB chúng tôi?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          3. Điều gì thích thú trong CLB Tin học mà anh chị đang muốn tuyển?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          4. Điều gì khiến anh chị cảm thấy được kích thích nhất trong tham gia
          vào CLB Tin học?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          5. Theo anh chị khi tham gia vào CLB tin học có yêu cầu đòi hỏi gì?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          6. Anh chị dự định sẽ tổ chức việc học tập, lao động khi tham gia CLB
          Tin học như thế nào?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          7. Anh chị sẵn sàng làm những việc tình nguyện, không lương vì CLB
          không? Vì sao?
        </Typography>
        {/* ================= */}
        <Typography
          variant="h3"
          style={{ color: '#ef5350', marginTop: 20 }}
          gutterBottom
        >
          B. Đào tạo và giáo dục
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          1. Anh chị tham gia vào các tổ chức hoặc hoạt động nào của sinh viên
          hay trong xã hội?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          2. Điểm trung bình của anh chị khi học đại học hoặc lớp chuyên ngành?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          3. Anh chị thích hay không thích môn nào nhất? Tại sao?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          4. Đánh giá chung của anh chị về hoạt động đào tạo chuyên ngành, các
          nhóm, tự học, chia sẻ?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          5. Anh chị trang trải học phí của mình bằng cách nào?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          6. Anh chị có nhận xét gì về CLB, tổ chức cvux mà anh chị từng và đang
          tham gia? Những điểm mạnh và điểm yếu? Điều gì anh chị không thích và
          thích ở CLB, tổ chức cũ mà anh chị từng và đang tham gia?
        </Typography>
        {/* ================= */}
        <Typography
          variant="h3"
          style={{ color: '#ef5350', marginTop: 20 }}
          gutterBottom
        >
          C. Kiến thức kinh nghiệm trong công việc
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          1. Hãy kể cho chúng tôi nghe về những nơi, tổ chức CLB các anh chị đã
          làm việc, tên công việc, thời gian, nội dung, chức vụ
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          2. Anh chị đạt được những giải thưởng nào liên quan đến công việc tại
          tổ chức, CLB đó?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          3. Anh chị có thể làm những công việc nào ở CLB chúng tôi?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          4. Những kinh nghiệm cũ giúp gì cho công việc mới tại CLB mới?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          5. Hãy kể về những thành công lớn nhất trong công việc của anh chị?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          6. Anh chị có thường xuyên hoàn thành công việc với chất lượng và thời
          gian đúng hạn không?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          7. Anh chị dự đính sẽ làm những việc gì trong những ngày đầu tiên làm
          thành viên CLB?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          8. *Ngoài ra* hỏi tiêu chuẩn cho công việc là gì? Tiêu chuẩn nào là
          quan trọng nhất. Làm thế nào để thực hiện một công việc cụ thể? Xử lý
          một tình huống cụ thể?
        </Typography>
        {/* ================= */}
        <Typography
          variant="h3"
          style={{ color: '#ef5350', marginTop: 20 }}
          gutterBottom
        >
          D. Khả năng hoà đồng và giao tiếp
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          1. Hãy kể về lớp trưởng, bí thư và những người bạn của anh chị?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          2. Anh chị thấy rằng làm việc một mình hay theo nhóm sẽ thích hợp,
          hiệu quả hơn?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          3. Anh chị giải quyết xunng đột như thế nào?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          4. Quan hệ của anh chị và những người hàng xóm, bạn cùng phòng như thế
          nào?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          5. Anh chị có thể cảm thấy khó khăn khi tiếp xúc với người mới quen
          không?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          6. 1 tình huống cụ thể
        </Typography>
        {/* ================= */}
        <Typography
          variant="h3"
          style={{ color: '#ef5350', marginTop: 20 }}
          gutterBottom
        >
          E. Tự nhận xét bản thân, ý thức trách nhiệm và cầu tiến
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          1. Anh chị vui lòng nhận xét về bản thân của anh chị?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          2. Những ưu thế của anh chị so với ứng viên khác? Đâu là điểm mạnh và
          điểm yếu của anh chị?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          3. Những điều anh chị muốn kể cho chúng tôi biết về anh chị?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          4. Bạn bè đánh giá anh chị như thế nào?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          5. Dự định của anh chị trong tương lai?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          6. Ước muốn lớn nhât trong nghề nghiệp học tập của anh chị là gì?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          7. Điều gì ảnh hướng lớn đến sự tiến bộ nghề nghiệp, học tập của anh
          chị?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          8. Theo anh chị nhà quản trị, chủ nhiệm, leader cần những phẩm chất
          gì?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          9. Nếu được trúng tuyển vào CLB anh chị có mong đợi hoặc đề nghị gì
          với ban chủ nhiệm CLB Tin học?
        </Typography>
        {/* ================= */}
        <Typography
          variant="h3"
          style={{ color: '#ef5350', marginTop: 20 }}
          gutterBottom
        >
          F. Quan điểm sở thích chung
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          1. Điều gì làm anh chị khó chịu nhất trong cuộc sống hiện nay?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          2. Những thói quen và sở thích của anh chị là gì?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          3. Nếu anh chị tuyển thành viên khoá sau, anh chị thấy ứng viên phải
          có tiêu chuẩn gì?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          4. Anh chị kích thích, động viên thành viên dưới quyền, thành viên
          cùng tuổi như thế nào?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          5. Hãy kể về một thất bại và cách anh chị vượt qua thất bại đó.
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          6. Điều gì thường làm anh chị phải lưỡng lự nhất?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          7. Bài học kinh nghiệm quý báu nhất mà anh chị đã học được trong thời
          gian qua?
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          8. Anh chị có nhận xét gì về tình hình kinh tế, chính trị, xã hội hiện
          này?
        </Typography>
      </Paper>
    </Paper>
  );
}

export default PaperList;
