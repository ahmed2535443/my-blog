// =====================================================
// ملف: page.js (الدرس الخامس: النماذج)
// المكان: app/learn/html/05-forms/page.js
// الوظيفة: تعريف المبتدئين بالنماذج في HTML
// URL: /learn/html/05-forms
// =====================================================

import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function Forms() {
  const lessonInfo = getLessonBySlug("html", "05-forms");

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <LessonHeader
          stage={lessonInfo.stage}
          lesson={lessonInfo}
          lessonIndex={lessonInfo.lessonIndex}
          totalLessons={lessonInfo.totalLessons}
        />

        {/* ========================================== */}
        {/* القسم الأول: ما هي النماذج؟ */}
        {/* ========================================== */}
        <LessonSection title="ما هي النماذج (Forms) ولماذا نستخدمها؟">
          <p>
            النماذج هي الطريقة الأساسية لجمع بيانات المستخدم في الويب. كل مرة تملأ فيها حقل بحث، أو تسجل حساباً جديداً، أو ترسل رسالة، أو تقوم بتسجيل الدخول - أنت تستخدم نموذج HTML.
          </p>

          <p>
            بدون النماذج، الويب سيكون محتوى للقراءة فقط بدون أي تفاعل. النماذج هي الجسر الذي يربط المستخدم بالخادم (Server).
          </p>

          <CodeBlock
            language="html"
            code={`<!-- هذا أبسط نموذج في HTML -->
<form>
    <label for="username">اسم المستخدم:</label>
    <input type="text" id="username" name="username" />

    <button type="submit">إرسال</button>
</form>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 تشبيه:
            </p>
            <p>
              النموذج مثل استمارة ورقية في البنك. فيها حقول تملؤها (اسم، عنوان، رقم هوية)، وأزرار للإرسال أو الإلغاء. النموذج في HTML يفعل نفس الشيء لكن رقمياً.
            </p>
          </div>

          <h3>أمثلة على النماذج في حياتنا اليومية:</h3>
          <ul>
            <li><strong>نموذج تسجيل الدخول:</strong> البريد الإلكتروني + كلمة المرور</li>
            <li><strong>نموذج البحث:</strong> حقل بحث واحد مع زر</li>
            <li><strong>نموذج شراء:</strong> بيانات الشحن + بيانات الدفع</li>
            <li><strong>نموذج تواصل معنا:</strong> الاسم + البريد + الموضوع + الرسالة</li>
            <li><strong>نموذج تعليقات:</strong> نص التعليق</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني: المشكلة التي يحلها النموذج */}
        {/* ========================================== */}
        <LessonSection title="المشكلة التي يحلها النموذج">
          <p>بدون النماذج، كيف يمكنك:</p>

          <ul>
            <li>تسجيل الدخول إلى حسابك؟</li>
            <li>إرسال رسالة تعليق على مقال؟</li>
            <li>شراء منتج من متجر إلكتروني؟</li>
            <li>البحث عن محتوى في موقع؟</li>
            <li>تحديث ملفك الشخصي؟</li>
          </ul>

          <p>
            <strong>النموذج يحل هذه المشكلة</strong> بتوفير حقول إدخال منظمة مع تحقق من صحة البيانات وإمكانية إرسالها للخادم. HTML يوفر لك كل الأدوات اللازمة لبناء نماذج قوية وسهلة الاستخدام.
          </p>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث: الشرح البسيط - وسم form */}
        {/* ========================================== */}
        <LessonSection title="وسم form - السمات الأساسية">
          <p>وسم <code>&lt;form&gt;</code> هو الحاوية الرئيسية التي تُحيط بجميع عناصر النموذج. له سمتان رئيسيتان:</p>

          <CodeBlock
            language="html"
            code={`<form action="/submit-form" method="POST">
    <!-- حقول الإدخال هنا -->
    <label for="name">الاسم:</label>
    <input type="text" id="name" name="name" />

    <button type="submit">إرسال</button>
</form>`}
          />

          <h3>السمة action</h3>
          <p>تُحدد <strong>الوجهة</strong> التي ستُرسل إليها بيانات النموذج عند الضغط على زر الإرسال. يمكن أن يكون:</p>
          <ul>
            <li><strong>مسار نسبي:</strong> <code>action=&quot;/submit&quot;</code> - يُرسل للخادم في نفس الموقع</li>
            <li><strong>URL كامل:</strong> <code>action=&quot;https://api.example.com/form&quot;</code> - لخادم خارجي</li>
            <li><strong>فارغ:</strong> <code>action=&quot;&quot;</code> أو عدم ذكرها - يُرسل لنفس الصفحة</li>
          </ul>

          <h3>السمة method</h3>
          <p>تُحدد <strong>طريقة</strong> إرسال البيانات. الأساسيتان:</p>
          <ul>
            <li><strong><code>GET</code>:</strong> يُرفق البيانات في رابط URL. مناسب للبحث فقط. البيانات تظهر في شريط العنوان.</li>
            <li><strong><code>POST</code>:</strong> يُرسل البيانات في جسم الطلب. مناسب لكل شيء (تسجيل، شراء، رفع ملفات). البيانات لا تظهر في الرابط.</li>
          </ul>

          <CodeBlock
            language="html"
            code={`<!-- نموذج بحث يستخدم GET - البيانات تظهر في الرابط -->
<form action="/search" method="GET">
    <input type="search" name="q" placeholder="ابحث هنا..." />
    <button type="submit">بحث</button>
</form>
<!-- النتيجة: /search?q=كلمة+البحث -->

<!-- نموذج تسجيل يستخدم POST - البيانات مخفية -->
<form action="/register" method="POST">
    <input type="text" name="username" />
    <input type="email" name="email" />
    <input type="password" name="password" />
    <button type="submit">تسجيل</button>
</form>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--danger)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              ⚠️ سمة name هي الأهم!
            </p>
            <p>
              بدون سمة <code>name</code> على حقول الإدخال، <strong>لن تُرسل أي بيانات</strong> عند إرسال النموذج! المفتاح (name) هو الذي يُعطي الخادم معلومة عن نوع كل قيمة. مثلاً: <code>name=&quot;email&quot;</code> يخبر الخادم أن هذه القيمة هي البريد الإلكتروني.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع: حقول الإدخال الأساسية */}
        {/* ========================================== */}
        <LessonSection title="حقول الإدخال الأساسية (Input Types)">
          <p>
            وسم <code>&lt;input&gt;</code> هو العنصر الأساسي في النماذج. يمكن أن يكون نصاً، أو كلمة مرور، أو زر، أو قائمة منسدلة، وغيرها. نوعه يُحدد بالسمة <code>type</code>:
          </p>

          <CodeBlock
            language="html"
            code={`<!-- حقل نص عادي -->
<label for="fullname">الاسم الكامل:</label>
<input type="text" id="fullname" name="fullname" placeholder="أدخل اسمك" />

<!-- حقل البريد الإلكتروني -->
<label for="email">البريد الإلكتروني:</label>
<input type="email" id="email" name="email" placeholder="example@mail.com" />

<!-- حقل كلمة المرور -->
<label for="password">كلمة المرور:</label>
<input type="password" id="password" name="password" />

<!-- حقل رقمي -->
<label for="age">العمر:</label>
<input type="number" id="age" name="age" min="18" max="120" />

<!-- حقل هاتف -->
<label for="phone">رقم الجوال:</label>
<input type="tel" id="phone" name="phone" placeholder="05XXXXXXXX" />

<!-- حقل رابط -->
<label for="website">موقعك الإلكتروني:</label>
<input type="url" id="website" name="website" placeholder="https://example.com" />

<!-- حقل البحث -->
<label for="search">بحث:</label>
<input type="search" id="search" name="q" placeholder="اكتب للبحث..." />`}
          />

          <h3>لماذا نستخدم أنواع مختلفة؟</h3>
          <ul>
            <li><strong>التحقق التلقائي:</strong> <code>type=&quot;email&quot;</code> يتحقق تلقائياً من صيغة البريد</li>
            <li><strong>لوحة مفاتيح مخصصة:</strong> على الهاتف، يعرض لوحة مفاتيح خاصة (أرقام للهاتف، @ للبريد)</li>
            <li><strong>إمكانية الوصول:</strong> قارئات الشاشة تخبر المستخدم بنوع الحقل</li>
            <li><strong>تحسين SEO:</strong> محركات البحث تفهم الحقول المختلفة</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس: textarea - حقل النص الطويل */}
        {/* ========================================== */}
        <LessonSection title="textarea - حقل النص الطويل">
          <p>
            عندما تحتاج من المستخدم كتابة نص طويل (رسالة، تعليق، وصف)، تستخدم <code>&lt;textarea&gt;</code> بدلاً من <code>&lt;input&gt;</code>. الفرق أنه يدعم أسطر متعددة ويمكن توسيعه.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- حقل نص متعدد الأسطر -->
<label for="message">رسالتك:</label>
<textarea
    id="message"
    name="message"
    rows="5"
    cols="40"
    placeholder="اكتب رسالتك هنا..."
    minlength="10"
    maxlength="500"
></textarea>

<!-- حقل تعليق بحجم أكبر -->
<label for="comment">أضف تعليقاً:</label>
<textarea
    id="comment"
    name="comment"
    rows="10"
    placeholder="شاركنا رأيك..."
></textarea>`}
          />

          <p>سمات <code>&lt;textarea&gt;</code> المهمة:</p>
          <ul>
            <li><strong><code>rows</code>:</strong> عدد الأسطر الظاهرة (الارتفاع الافتراضي)</li>
            <li><strong><code>cols</code>:</strong> عدد الأحرف في السطر الواحد (العرض الافتراضي)</li>
            <li><strong><code>minlength</code>:</strong> الحد الأدنى لعدد الأحرف</li>
            <li><strong><code>maxlength</code>:</strong> الحد الأقصى لعدد الأحرف</li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 ملاحظة:
            </p>
            <p>
              يمكنك السحب من الزاوية السفلية اليمنى لـ <code>&lt;textarea&gt;</code> لتوسيعه يدوياً. يمكن التحكم في هذا السلوك باستخدام CSS إذا أردت تعطيله.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس: القوائم المنسدلة select و option */}
        {/* ========================================== */}
        <LessonSection title="القوائم المنسدلة: select و option">
          <p>
            عندما تريد عرض خيارات متعددة للمستخدم واختيار واحد أو أكثر، تستخدم <code>&lt;select&gt;</code> مع <code>&lt;option&gt;</code>.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- قائمة منسدلة بسيطة -->
<label for="country">الدولة:</label>
<select id="country" name="country">
    <option value="">-- اختر دولة --</option>
    <option value="sa">السعودية</option>
    <option value="ae">الإمارات</option>
    <option value="eg">مصر</option>
    <option value="jo">الأردن</option>
    <option value="kw">الكويت</option>
</select>

<!-- قائمة مع optgroup (مجموعات) -->
<label for="language">اللغة:</label>
<select id="language" name="language">
    <optgroup label="لغات الويب">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JavaScript</option>
    </optgroup>
    <optgroup label="لغات الخادم">
        <option value="python">Python</option>
        <option value="node">Node.js</option>
        <option value="php">PHP</option>
    </optgroup>
</select>

<!-- قائمة متعددة الاختيار (اختيار أكثر من خيار) -->
<label for="skills">مهاراتك (اضغط Ctrl لاختيار أكثر):</label>
<select id="skills" name="skills" multiple size="5">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
    <option value="react">React</option>
    <option value="node">Node.js</option>
</select>`}
          />

          <p>ملاحظات مهمة:</p>
          <ul>
            <li>الخيار الأول <code>value=&quot;&quot;</code> هو خيار افتراضي يُخبر المستخدم باختيار أحد الخيارات</li>
            <li>السمة <code>value</code> هي التي تُرسل للخادم (ليست النص الظاهر)</li>
            <li><code>&lt;optgroup&gt;</code> يُجمّع الخيارات في مجموعات مع عنوان</li>
            <li>سمة <code>multiple</code> تسمح باختيار أكثر من خيار (Ctrl+Click)</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع: Radio و Checkbox */}
        {/* ========================================== */}
        <LessonSection title="Radio Buttons و Checkboxes">
          <p>
            <strong>Radio Buttons</strong> تُستخدم لاختيار <strong>خيار واحد</strong> من عدة خيارات متنافسة. <strong>Checkboxes</strong> تُستخدم لاختيار <strong>صفر أو أكثر</strong> من عدة خيارات مستقلة.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- Radio Buttons: اختيار واحد فقط -->
<fieldset>
    <legend>الجنس:</legend>
    <label>
        <input type="radio" name="gender" value="male" />
        ذكر
    </label>
    <label>
        <input type="radio" name="gender" value="female" />
        أنثى
    </label>
</fieldset>

<!-- Radio Buttons مع خيار محدد مسبقاً -->
<fieldset>
    <legend>طريقة الدفع:</legend>
    <label>
        <input type="radio" name="payment" value="credit" checked />
        بطاقة ائتمان
    </label>
    <label>
        <input type="radio" name="payment" value="applepay" />
        Apple Pay
    </label>
    <label>
        <input type="radio" name="payment" value="cod" />
        الدفع عند الاستلام
    </label>
</fieldset>

<!-- Checkboxes: اختيار متعدد -->
<fieldset>
    <legend>الاهتمامات:</legend>
    <label>
        <input type="checkbox" name="interests" value="tech" />
        التكنولوجيا
    </label>
    <label>
        <input type="checkbox" name="interests" value="sports" />
        الرياضة
    </label>
    <label>
        <input type="checkbox" name="interests" value="music" />
        الموسيقى
    </label>
</fieldset>

<!-- Checkbox للشروط والأحكام -->
<label>
    <input type="checkbox" name="terms" value="accepted" required />
    أوافق على الشروط والأحكام
</label>`}
          />

          <p>الفرق الجوهري:</p>
          <ul>
            <li><strong>Radio:</strong> جميع الخيارات <strong>لها نفس الـ name</strong> - هذا ما يجعلها متنافسة (يمكن اختيار واحد فقط)</li>
            <li><strong>Checkbox:</strong> كل خيار يمكن أن يكون له name مختلف أو نفس الـ name (الاختيارات مستقلة)</li>
            <li>الخيار <code>checked</code> يُحدد الخيار المحدد مسبقاً</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن: Labels وأهميتها */}
        {/* ========================================== */}
        <LessonSection title="Labels وأهميتها (for attribute)">
          <p>
            وسم <code>&lt;label&gt;</code> يربط نص التسمية بالحقل المقابل. هذه ليست مجرد ميزة تجميلية - إنها <strong>ضرورة للوصولية (Accessibility)</strong>.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- الطريقة الصحيحة: استخدام سمة for -->
<!-- for يجب أن يطابق id الحقل -->
<label for="email">البريد الإلكتروني:</label>
<input type="email" id="email" name="email" />

<!-- الطريقة البديلة: تغليف الحقل بالـ label -->
<label>
    كلمة المرور:
    <input type="password" name="password" />
</label>`}
          />

          <h3>لماذا الـ Label مهم جداً؟</h3>
          <ul>
            <li><strong>الوصولية:</strong> قارئات الشاشة تقرأ نص الـ label للمستخدم المبصَر</li>
            <li><strong>النقر:</strong> عند النقر على النص، يُركّز المستخدم على الحقل تلقائياً (مفيد للهواتف)</li>
            <li><strong>الوضوح:</strong> يوضح لكل المستخدمين ماذا يعني كل حقل</li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--danger)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--danger)" }}>
              ❌ خطأ شائع:
            </p>
            <p>
              كتابة النص بجانب الحقل بدون استخدام <code>&lt;label&gt;</code> هو خطأ شائع. النص قد يبدو مطابقاً بصرياً، لكن لا يوجد رابط برمجي بينهما. دائماً استخدم <code>&lt;label&gt;</code> مع سمة <code>for</code>.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع: fieldset و legend */}
        {/* ========================================== */}
        <LessonSection title="fieldset و legend - تجميع الحقول">
          <p>
            <code>&lt;fieldset&gt;</code> يُجمّع حقولاً ذات صلة في مجموعة بصرية. <code>&lt;legend&gt;</code> يُعطي هذه المجموعة عنواناً. هذا يُحسّن من بنية النموذج وإمكانية الوصول.
          </p>

          <CodeBlock
            language="html"
            code={`<form action="/register" method="POST">
    <fieldset>
        <legend>المعلومات الشخصية</legend>

        <label for="fname">الاسم الأول:</label>
        <input type="text" id="fname" name="fname" required />

        <label for="lname">اسم العائلة:</label>
        <input type="text" id="lname" name="lname" required />

        <label for="dob">تاريخ الميلاد:</label>
        <input type="date" id="dob" name="dob" />
    </fieldset>

    <fieldset>
        <legend>معلومات الاتصال</legend>

        <label for="email">البريد الإلكتروني:</label>
        <input type="email" id="email" name="email" required />

        <label for="phone">رقم الجوال:</label>
        <input type="tel" id="phone" name="phone" />
    </fieldset>

    <fieldset>
        <legend>تفضيلات الإشعارات</legend>

        <label>
            <input type="checkbox" name="notif_email" value="yes" checked />
            إشعارات البريد الإلكتروني
        </label>
        <label>
            <input type="checkbox" name="notif_sms" value="yes" />
            إشعارات الرسائل القصيرة
        </label>
    </fieldset>

    <button type="submit">تسجيل</button>
</form>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم العاشر: الحقول المطلوبة والتحقق */}
        {/* ========================================== */}
        <LessonSection title="التحقق من صحة البيانات (Validation)">
          <p>
            HTML يوفر التحقق الأساسي من صحة البيانات <strong>مجاناً</strong> بدون JavaScript! يمكنك جعل الحقول مطلوبة وتحديد قيود على المدخلات مباشرة في HTML.
          </p>

          <CodeBlock
            language="html"
            code={`<form action="/submit" method="POST">
    <!-- حقل مطلوب -->
    <label for="name">الاسم (مطلوب):</label>
    <input type="text" id="name" name="name" required />

    <!-- حقل بحد أدنى وأقصى -->
    <label for="username">اسم المستخدم (3-20 حرف):</label>
    <input
        type="text"
        id="username"
        name="username"
        required
        minlength="3"
        maxlength="20"
    />

    <!-- حقل رقمي بحدود -->
    <label for="age">العمر (18-120):</label>
    <input
        type="number"
        id="age"
        name="age"
        required
        min="18"
        max="120"
    />

    <!-- حقل بنمط معين (regex) -->
    <label for="phone">رقم الجوال (يبدأ بـ 05):</label>
    <input
        type="tel"
        id="phone"
        name="phone"
        pattern="05[0-9]{8}"
        title="يجب أن يبدأ بـ 05 ويتكون من 10 أرقام"
        required
    />

    <!-- حقل بريد إلكتروني مع التحقق التلقائي -->
    <label for="email">البريد الإلكتروني:</label>
    <input type="email" id="email" name="email" required />

    <!-- حقل كلمة مرور قوي -->
    <label for="password">كلمة المرور:</label>
    <input
        type="password"
        id="password"
        name="password"
        required
        minlength="8"
        pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="يجب أن تحتوي على حرف كبير وصغير ورقم و8 أحرف على الأقل"
    />

    <button type="submit">إرسال</button>
</form>`}
          />

          <h3>سمات التحقق المتاحة:</h3>
          <ul>
            <li><strong><code>required</code>:</strong> الحقل إلزامي - لا يمكن الإرسال بدونه</li>
            <li><strong><code>minlength</code> / <code>maxlength</code>:</strong> الحد الأدنى والأقصى لعدد الأحرف</li>
            <li><strong><code>min</code> / <code>max</code>:</strong> الحد الأدنى والأقصى للقيم الرقمية والتواريخ</li>
            <li><strong><code>pattern</code>:</strong> نمط معين باستخدام التعبيرات النمطية (Regex)</li>
            <li><strong><code>title</code>:</strong> رسالة توضيحية تظهر عند خطأ التحقق</li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 هل تعلم؟
            </p>
            <p>
              التحقق من HTML هو خطأ أولى فقط. دائماً أعد التحقق على الخادم (Server-side Validation) باستخدام JavaScript و منطق الخادم، لأن المستخدم يُمكنه تعطيل التحقق من المتصفح.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الحادي عشر: الأزرار */}
        {/* ========================================== */}
        <LessonSection title="الأزرار: submit, button, reset">
          <p>
            HTML يوفر ثلاثة أنواع أساسية من الأزرار داخل النماذج:
          </p>

          <CodeBlock
            language="html"
            code={`<form action="/submit" method="POST">
    <input type="text" name="data" />

    <!-- زر الإرسال: يُرسل بيانات النموذج -->
    <button type="submit">إرسال</button>

    <!-- زر عادي: لا يفعل شيئاً بمفرده (يحتاج JavaScript) -->
    <button type="button" onclick="alert('مرحباً!')">اضغط هنا</button>

    <!-- زر إعادة التعيين: يُفرّغ جميع حقول النموذج -->
    <button type="reset">مسح النموذج</button>
</form>`}
          />

          <h3>الفرق بين input و button:</h3>
          <CodeBlock
            language="html"
            code={`<!-- input كزر: نص داخل سمة value -->
<input type="submit" value="إرسال" />
<input type="reset" value="مسح" />
<input type="button" value="اضغط" />

<!-- button كزر: نص داخل العنصر نفسه (يمكن أن يحتوي HTML) -->
<button type="submit">إرسال</button>
<button type="reset">
    <img src="reset-icon.svg" alt="" /> مسح
</button>`}
          />

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 لماذا نفضل &lt;button&gt;؟
            </p>
            <p>
              وسم <code>&lt;button&gt;</code> أكثر مرونة من <code>&lt;input&gt;</code> لأنه يسمح بوضع محتوى HTML داخله (نصوص + أيقونات)، بينما <code>&lt;input&gt;</code> لا يقبل إلا نصاً في سمة <code>value</code>. دائماً استخدم <code>&lt;button&gt;</code>.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثاني عشر: حقول متقدمة */}
        {/* ========================================== */}
        <LessonSection title="حقول الإدخال المتقدمة">
          <p>
            HTML5 أضاف أنواعاً جديدة من الحقول توفر تجربة مستخدم أفضل مجاناً:
          </p>

          <CodeBlock
            language="html"
            code={`<!-- حقل التاريخ -->
<label for="birthday">تاريخ الميلاد:</label>
<input type="date" id="birthday" name="birthday" />

<!-- حقل التاريخ والوقت -->
<label for="appointment">موعد الاستشارة:</label>
<input type="datetime-local" id="appointment" name="appointment" />

<!-- حقل الوقت -->
<label for="time">وقت التوصيل:</label>
<input type="time" id="time" name="time" />

<!-- حقل اختيار اللون -->
<label for="fav-color">لونك المفضل:</label>
<input type="color" id="fav-color" name="fav-color" value="#e44d26" />

<!-- حقل شريط التمرير (Range) -->
<label for="rating">تقييمك (0-100):</label>
<input type="range" id="rating" name="rating" min="0" max="100" value="50" />
<span>50</span>

<!-- حقل رفع ملفات -->
<label for="avatar">صورة الملف الشخصي:</label>
<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg, image/webp" />

<!-- رفع عدة ملفات -->
<label for="documents">مستنداتك:</label>
<input type="file" id="documents" name="documents" multiple accept=".pdf,.doc,.docx" />

<!-- حقل مخفي -->
<input type="hidden" name="user_id" value="12345" />

<!-- حقل البحث مع زر مسح -->
<input type="search" name="q" placeholder="بحث..." />`}
          />

          <h3>شرح الحقول المتقدمة:</h3>
          <ul>
            <li><strong><code>date</code>:</strong> يعرض منتقي تاريخ تلقائي (جميل وعملي)</li>
            <li><strong><code>datetime-local</code>:</strong> تاريخ + وقت معاً</li>
            <li><strong><code>time</code>:</strong> حقل وقت فقط</li>
            <li><strong><code>color</code>:</strong> منتقي ألوان - يعرض لوح الألوان</li>
            <li><strong><code>range</code>:</strong> شريط تمرير من قيمة لقيمة</li>
            <li><strong><code>file</code>:</strong> لرفع ملفات من جهاز المستخدم</li>
            <li><strong><code>hidden</code>:</strong> حقل مخفي لا يظهر لكن يُرسل مع النموذج</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثالث عشر: placeholder و autocomplete */}
        {/* ========================================== */}
        <LessonSection title="placeholder و autocomplete">
          <p>سمتان مفيدتان تُحسّنان تجربة المستخدم بشكل كبير:</p>

          <CodeBlock
            language="html"
            code={`<!-- placeholder: نص تلميحي يظهر داخل الحقل الفارغ -->
<input type="text" name="name" placeholder="أدخل اسمك الكامل" />
<input type="email" name="email" placeholder="example@mail.com" />
<input type="search" name="q" placeholder="🔍 ابحث عن أي شيء..." />

<!-- autocomplete: تفعيل/تعطيل الاقتراحات التلقائية -->
<form>
    <input type="text" name="name" autocomplete="name" />
    <input type="email" name="email" autocomplete="email" />
    <input type="tel" name="phone" autocomplete="tel" />
    <input type="address" name="address" autocomplete="street-address" />

    <!-- تعطيل الاقتراحات التلقائية (مثلاً لحقول كلمة المرور) -->
    <input type="password" name="new-password" autocomplete="new-password" />
    <input type="one-time-code" name="otp" autocomplete="one-time-code" />
</form>`}
          />

          <h3>autocomplete - قيم مفيدة:</h3>
          <ul>
            <li><code>name</code> - الاسم الكامل</li>
            <li><code>email</code> - البريد الإلكتروني</li>
            <li><code>tel</code> - رقم الهاتف</li>
            <li><code>street-address</code> - العنوان</li>
            <li><code>country</code> - الدولة</li>
            <li><code>postal-code</code> - الرمز البريدي</li>
            <li><code>cc-number</code> - رقم بطاقة الائتمان</li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
              💡 نصيحة:
            </p>
            <p>
              <code>placeholder</code> هو نص تلميحي فقط وليس بديلاً عن <code>&lt;label&gt;</code>. عند النقر على الحقل، يختفي الـ placeholder. لذا دائماً استخدم <code>&lt;label&gt;</code> مع <code>placeholder</code>.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الرابع عشر: مثال عملي - نموذج تسجيل مستخدم كامل */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: نموذج تسجيل مستخدم كامل">
          <p>لنجمع كل ما تعلمناه في نموذج تسجيل احترافي:</p>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إنشاء حساب جديد - CodeMaster</title>
</head>
<body>

    <main>
        <h1>إنشاء حساب جديد</h1>
        <p>املأ البيانات التالية لإنشاء حسابك</p>

        <form action="/api/register" method="POST">
            <!-- المعلومات الشخصية -->
            <fieldset>
                <legend>المعلومات الشخصية</legend>

                <label for="fname">الاسم الأول *</label>
                <input
                    type="text"
                    id="fname"
                    name="first_name"
                    required
                    minlength="2"
                    maxlength="50"
                    placeholder="أحمد"
                    autocomplete="given-name"
                />

                <label for="lname">اسم العائلة *</label>
                <input
                    type="text"
                    id="lname"
                    name="last_name"
                    required
                    minlength="2"
                    maxlength="50"
                    placeholder="محمد"
                    autocomplete="family-name"
                />

                <label for="dob">تاريخ الميلاد *</label>
                <input
                    type="date"
                    id="dob"
                    name="date_of_birth"
                    required
                    max="2008-01-01"
                />

                <label for="gender">الجنس:</label>
                <select id="gender" name="gender">
                    <option value="">-- اختر --</option>
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                    <option value="other">آخر</option>
                </select>
            </fieldset>

            <!-- معلومات الاتصال -->
            <fieldset>
                <legend>معلومات الاتصال</legend>

                <label for="email">البريد الإلكتروني *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="ahmed@example.com"
                    autocomplete="email"
                />

                <label for="phone">رقم الجوال *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="05[0-9]{8}"
                    placeholder="0512345678"
                    title="رقم جوال سعودي يبدأ بـ 05"
                    autocomplete="tel"
                />
            </fieldset>

            <!-- كلمة المرور -->
            <fieldset>
                <legend>كلمة المرور</legend>

                <label for="password">كلمة المرور *</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    minlength="8"
                    pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="8 أحرف على الأقل مع حرف كبير وصغير ورقم"
                    autocomplete="new-password"
                />

                <label for="confirm-password">تأكيد كلمة المرور *</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm_password"
                    required
                    minlength="8"
                    autocomplete="new-password"
                />
            </fieldset>

            <!-- التفضيلات -->
            <fieldset>
                <legend>تفضيلات التعلم</legend>

                <label for="level">مستوى التعلم:</label>
                <select id="level" name="learning_level">
                    <option value="beginner" selected>مبتدئ</option>
                    <option value="intermediate">متوسط</option>
                    <option value="advanced">متقدم</option>
                </select>

                <label for="goals">ما الذي تريد تعلمه؟</label>
                <select id="goals" name="goal" multiple size="4">
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="js">JavaScript</option>
                    <option value="react">React</option>
                    <option value="node">Node.js</option>
                </select>

                <label>
                    <input type="checkbox" name="newsletter" value="yes" checked />
                    أريد استلام نشرة البريد الإلكتروني
                </label>
            </fieldset>

            <!-- الشروط -->
            <label>
                <input type="checkbox" name="terms" value="accepted" required />
                أوافق على <a href="/terms">الشروط والأحكام</a> و <a href="/privacy">سياسة الخصوصية</a> *
            </label>

            <!-- أزرار الإرسال -->
            <div>
                <button type="submit">إنشاء الحساب</button>
                <button type="reset">مسح النموذج</button>
            </div>
        </form>
    </main>

</body>
</html>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الخامس عشر: مثال عملي - نموذج تواصل معنا */}
        {/* ========================================== */}
        <LessonSection title="مثال عملي: نموذج تواصل معنا">
          <p>نموذج تواصل معنا هو أكثر النماذج شيوعاً في المواقع. هذا مثال كامل وعملي:</p>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تواصل معنا - CodeMaster</title>
</head>
<body>

    <main>
        <h1>تواصل معنا</h1>
        <p>يسعدنا تلقي رسالتك. سنرد عليك في أقرب وقت ممكن.</p>

        <form action="/api/contact" method="POST">
            <!-- معلومات المستخدم -->
            <fieldset>
                <legend>بياناتك</legend>

                <label for="contact-name">الاسم الكامل *</label>
                <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    minlength="3"
                    placeholder="أحمد محمد"
                    autocomplete="name"
                />

                <label for="contact-email">البريد الإلكتروني *</label>
                <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="ahmed@example.com"
                    autocomplete="email"
                />

                <label for="contact-phone">رقم الجوال (اختياري)</label>
                <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="0512345678"
                    autocomplete="tel"
                />
            </fieldset>

            <!-- تفاصيل الرسالة -->
            <fieldset>
                <legend>تفاصيل الرسالة</legend>

                <label for="subject">الموضوع *</label>
                <select id="subject" name="subject" required>
                    <option value="">-- اختر موضوعاً --</option>
                    <option value="general">استفسار عام</option>
                    <option value="support">دعم فني</option>
                    <option value="billing">الفواتير والدفع</option>
                    <option value="feedback">ملاحظات واقتراحات</option>
                    <option value="partnership">شراكة تجارية</option>
                    <option value="bug">الإبلاغ عن خطأ</option>
                </select>

                <label for="message">رسالتك *</label>
                <textarea
                    id="message"
                    name="message"
                    rows="8"
                    required
                    minlength="20"
                    maxlength="2000"
                    placeholder="اكتب رسالتك هنا... (20 حرف على الأقل)"
                ></textarea>

                <small>الحد الأقصى: 2000 حرف</small>
            </fieldset>

            <!-- مرفقات -->
            <fieldset>
                <legend>مرفقات (اختياري)</legend>

                <label for="attachments">أرفق ملفات (صور أو مستندات)</label>
                <input
                    type="file"
                    id="attachments"
                    name="attachments"
                    multiple
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                />
                <small>الصيغ المدعومة: JPG, PNG, PDF, DOC (حد أقصى 5 ميغابايل للملف الواحد)</small>
            </fieldset>

            <!-- الموافقة -->
            <label>
                <input type="checkbox" name="privacy" value="accepted" required />
                أوافق على <a href="/privacy">سياسة الخصوصية</a> لمعالجة بياناتي *
            </label>

            <button type="submit">إرسال الرسالة</button>
        </form>
    </main>

</body>
</html>`}
          />
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السادس عشر: ماذا يحدث خلف الكواليس؟ */}
        {/* ========================================== */}
        <LessonSection title="ماذا يحدث خلف الكواليس؟">
          <p>عندما يقرأ المتصفح نموذج HTML، يحدث التالي:</p>

          <ul>
            <li>يُنشئ المتصفح <strong>نموذج HTML Form</strong> (DOM) يحتوي على جميع الحقول كعناصر تفاعلية.</li>
            <li>كل حقل <code>&lt;input&gt;</code> يتحول إلى عنصر تفاعلي حسب نوعه (نص، رقم، قائمة...).</li>
            <li>يُطبّق التحقق التلقائي من HTML5 عند محاولة الإرسال (required, pattern, min, max...).</li>
            <li>عند النقر على زر <code>type=&quot;submit&quot;</code>، يجمع المتصفح جميع قيم الحقول التي لها سمة <code>name</code>.</li>
            <li>يُحوّل البيانات إلى صيغة <strong>URL Encoded</strong> (لفعل GET) أو <strong>FormData</strong> (لفعل POST).</li>
            <li>يُرسل الطلب إلى الخادم في المسار المحدد بـ <code>action</code>.</li>
          </ul>

          <div
            className="p-4 rounded-xl my-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>
              🔍 هل تعلم؟
            </p>
            <p>
              يمكنك مشاهدة البيانات المُرسلة بالضغط على F12 ثم تبويب <strong>Network</strong> ثم إرسال النموذج. سترى الطلب وجميع البيانات المرفقة معه. هذا مفيد جداً ل调试 المشاكل.
            </p>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم السابع عشر: الأخطاء الشائعة */}
        {/* ========================================== */}
        <LessonSection title="الأخطاء الشائعة">
          <ul>
            <li>
              <strong>❌ نسيان سمة name:</strong>
              <br />
              كتابة <code>&lt;input type=&quot;text&quot;&gt;</code> بدون <code>name</code>. هذا يعني أن الحقل لن يُرسل أي بيانات عند إرسال النموذج. دائماً أضف name لكل حقل تريد إرساله.
            </li>
            <li>
              <strong>❌ عدم استخدام &lt;label&gt;:</strong>
              <br />
              كتابة النص بجانب الحقل بدون <code>&lt;label&gt;</code> مع سمة <code>for</code>. هذا يُضعف الوصولية ويُصعّب الاستخدام على الهواتف.
            </li>
            <li>
              <strong>❌ استخدام placeholder بديل label:</strong>
              <br />
              الـ placeholder يختفي عند الكتابة. لا يُغني عن الـ label أبداً.
            </li>
            <li>
              <strong>❌ استخدام GET لبيانات حساسة:</strong>
              <br />
              استخدام <code>method=&quot;GET&quot;</code> لنموذج تسجيل دخول. بيانات كلمة المرور ستظهر في الرابط ولن تُخزّن في السجلات. استخدم POST للبيانات الحساسة دائماً.
            </li>
            <li>
              <strong>❌ عدم التحقق على الخادم:</strong>
              <br />
              الاعتماد كلياً على التحقق من HTML. المستخدم يُمكنه تعطيله بسهولة. دائماً أعد التحقق على الخادم.
            </li>
            <li>
              <strong>❌ عدم تحديد نوع الملفات المقبولة:</strong>
              <br />
              استخدام <code>&lt;input type=&quot;file&quot;&gt;</code> بدون سمة <code>accept</code>. هذا يسمح برفع أي ملف، مما قد يكون خطيراً.
            </li>
            <li>
              <strong>❌ زر الإرسال بدون type:</strong>
              <br />
              كتابة <code>&lt;button&gt;إرسال&lt;/button&gt;</code> بدون type. في بعض المتصفحات القديمة، يتصرف الزر كزر reset. دائماً حدد <code>type=&quot;submit&quot;</code>.
            </li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم الثامن عشر: أفضل الممارسات */}
        {/* ========================================== */}
        <LessonSection title="أفضل الممارسات">
          <ul>
            <li><strong>✅ استخدم label مع for لكل حقل:</strong> لتحسين الوصولية وتجربة المستخدم.</li>
            <li><strong>✅ استخدم fieldset و legend لتجميع الحقول:</strong> لتحسين البنية الدلالية.</li>
            <li><strong>✅ اختر نوع input المناسب:</strong> email للبريد، tel للهاتف، number للأرقام.</li>
            <li><strong>✅ استخدم required مع الحقول الإلزامية:</strong> للتحقق الأساسي من المتصفح.</li>
            <li><strong>✅ أضف autocomplete:</strong> لتسريع ملء النماذج للمستخدمين العائدين.</li>
            <li><strong>✅ استخدم POST للبيانات الحساسة:</strong> لا تستخدم GET لكلمة المرور أو بيانات الدفع.</li>
            <li><strong>✅ أضف placeholder توضيحي:</strong> يُعطي أمثلة على المدخلات المتوقعة.</li>
            <li><strong>✅ وضح النجاح والخطأ:</strong> أرسل رسائل واضحة بعد الإرسال.</li>
            <li><strong>✅ اجعل النموذج متجاوباً:</strong> يعمل على جميع الأجهزة (الهواتف أولاً!).</li>
            <li><strong>✅ أعد التحقق على الخادم:</strong> التحقق من HTML وحده غير كافٍ.</li>
          </ul>
        </LessonSection>

        {/* ========================================== */}
        {/* القسم التاسع عشر: ملخص */}
        {/* ========================================== */}
        <LessonSection title="ملخص الدرس">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <ul className="space-y-3">
              <li><strong style={{ color: "var(--primary)" }}>النموذج <code>&lt;form&gt;</code></strong> هو حاوية البيانات مع <code>action</code> (الوجهة) و <code>method</code> (طريقة الإرسال)</li>
              <li>أنواع <code>&lt;input&gt;</code>: text, email, password, number, tel, url, search, date, time, color, range, file, hidden</li>
              <li><code>&lt;textarea&gt;</code> للنصوص الطويلة، <code>&lt;select&gt;</code> للقوائم المنسدلة</li>
              <li><strong>Radio</strong> لاختيار واحد، <strong>Checkbox</strong> لاختيار متعدد</li>
              <li>سمة <code>name</code> <strong>إلزامية</strong> لجميع الحقول التي تريد إرسالها</li>
              <li><code>&lt;label&gt;</code> مع <code>for</code> ضروري للوصولية</li>
              <li>التحقق: <code>required</code>, <code>minlength</code>/<code>maxlength</code>, <code>min</code>/<code>max</code>, <code>pattern</code></li>
              <li><code>&lt;fieldset&gt;</code> و <code>&lt;legend&gt;</code> لتجميع الحقول المتشابهة</li>
              <li>استخدم <strong>POST</strong> للبيانات الحساسة و <strong>GET</strong> للبحث فقط</li>
              <li>التحقق من HTML مساعدة أولى، التحقق من الخادم هو الأهم</li>
            </ul>
          </div>
        </LessonSection>

        {/* ========================================== */}
        {/* Quiz */}
        {/* ========================================== */}
        <Quiz
          question="لماذا سمة name مهمة في حقول الإدخال؟"
          options={[
            "لتحسين المظهر فقط",
            "لجعل الحقل مرئياً",
            "لتحديد المفتاح الذي سيُرسل به القيمة للخادم",
            "للتحقق من صحة البيانات",
          ]}
          correctAnswer={2}
          explanation="بدون سمة name، لن تُرسل أي بيانات من هذا الحقل عند إرسال النموذج. الاسم هو المفتاح الذي يُستخدم لتمييز القيمة في الخادم (مثل: name=&quot;email&quot; → email=ahmed@example.com)."
        />

        <Quiz
          question="ما الفرق بين radio button و checkbox؟"
          options={[
            "لا يوجد فرق بينهما",
            "Radio لاختيار واحد فقط، Checkbox لاختيار متعدد",
            "Radio للنصوص، Checkbox للأرقام",
            "Radio أفضل للوصولية، Checkbox أسوأ",
          ]}
          correctAnswer={1}
          explanation="Radio buttons مصممة لاختيار خيار واحد فقط من مجموعة (مثل: الجنس). Checkboxes تسمح باختيار صفر أو أكثر من خيارات مستقلة (مثل: الاهتمامات)."
        />

        <Quiz
          question="أي method يجب استخدامه لنموذج تسجيل الدخول؟"
          options={[
            "GET - لأنه أسرع",
            "POST - لأنه يُخفي البيانات الحساسة",
            "PUT - لأنه الأحدث",
            "DELETE - لأنه يحذف البيانات",
          ]}
          correctAnswer={1}
          explanation="POST يُرسل البيانات في جسم الطلب وليس في الرابط. هذا يعني أن كلمة المرور لن تظهر في شريط العنوان أو في سجل المتصفح أو في السيرفر logs. دائماً استخدم POST للبيانات الحساسة."
        />

        {/* ========================================== */}
        {/* تحدي */}
        {/* ========================================== */}
        <Challenge
          title="تحدي: نموذج تعليق على مقال"
          description={
            <p>
              أنشئ نموذج تعليق يحتوي على:
              <br />
              1. حقل الاسم مع <code>&lt;label&gt;</code> و <code>required</code>
              <br />
              2. حقل البريد الإلكتروني مع <code>type=&quot;email&quot;</code>
              <br />
              3. حقل نصي طويل (<code>&lt;textarea&gt;</code>) للتعليق مع <code>minlength</code> و <code>maxlength</code>
              <br />
              4. Checkbox للشروط مطلوب (<code>required</code>)
              <br />
              5. زر إرسال وزر مسح
              <br />
              6. استخدم <code>method=&quot;POST&quot;</code>
            </p>
          }
        >
          <CodeBlock
            language="html"
            code={`<form action="/api/comments" method="POST">
    <fieldset>
        <legend>أضف تعليقاً</legend>

    <label for="comment-name">اسمك *</label>
    <input type="text" id="comment-name" name="name" required
           placeholder="أحمد" minlength="2" />

    <label for="comment-email">بريدك الإلكتروني *</label>
    <input type="email" id="comment-email" name="email" required
           placeholder="ahmed@example.com" />

    <label for="comment-text">تعليقك *</label>
    <textarea id="comment-text" name="comment" required
              rows="5" minlength="10" maxlength="500"
              placeholder="اكتب تعليقك هنا..."></textarea>

    <label>
        <input type="checkbox" name="terms" value="accepted" required />
        أوافق على شروط التعليق *
    </label>

    <button type="submit">إرسال التعليق</button>
    <button type="reset">مسح</button>
    </fieldset>
</form>`}
          />
        </Challenge>

        {/* ========================================== */}
        {/* مشروع مصغر */}
        {/* ========================================== */}
        <div
          className="rounded-xl p-6 my-6 border-2"
          style={{ background: "var(--surface)", borderColor: "var(--secondary)" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🏗️</span>
            <span className="font-bold text-lg" style={{ color: "var(--secondary)" }}>
              Mini Project: نموذج طلب انضمام لفريق
            </span>
          </div>
          <p className="mb-4" style={{ color: "var(--foreground)" }}>
            أنشئ نموذج طلب انضمام لفريق عمل يحتوي على:
          </p>
          <ul className="mb-4" style={{ color: "var(--foreground)" }}>
            <li>قسم المعلومات الشخصية (اسم، تاريخ ميلاد، جنس) باستخدام <code>&lt;fieldset&gt;</code></li>
            <li>قسم معلومات الاتصال (بريد، هاتف) مع autocomplete مناسب</li>
            <li>قسم المهارات باستخدام checkboxes (HTML, CSS, JS, React, Node)</li>
            <li>مستوى الخبرة باستخدام radio buttons (مبتدئ، متوسط، متقدم، خبير)</li>
            <li>حقل <code>&lt;textarea&gt;</code> لكتابة دليل الانضمام مع <code>minlength</code></li>
            <li>حقل رفع السيرة الذاتية (PDF فقط) باستخدام <code>accept</code></li>
            <li>التحقق من الحقول الإلزامية باستخدام <code>required</code></li>
            <li>الشروط والأحكام مع checkbox مطلوب</li>
          </ul>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            💡 تلميح: استخدم <code>&lt;fieldset&gt;</code> و <code>&lt;legend&gt;</code> لتجميع كل قسم، وتأكد من أن كل حقل له <code>&lt;label&gt;</code> بـ <code>for</code> يطابق الـ <code>id</code>.
          </p>
        </div>

        {/* ========================================== */}
        {/* Cheat Sheet */}
        {/* ========================================== */}
        <CheatSheet title="ملخص النماذج">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>النماذج والحقول:</p>
              <CodeBlock
                language="html"
                code={`<!-- النموذج الأساسي -->
<form action="/url" method="POST">
  ...
</form>

<!-- أنواع الإدخال -->
<input type="text" name="x" />
<input type="email" name="x" />
<input type="password" name="x" />
<input type="number" name="x" />
<input type="tel" name="x" />
<input type="url" name="x" />
<input type="date" name="x" />
<input type="color" name="x" />
<input type="range" name="x" />
<input type="file" name="x" />
<input type="hidden" name="x" />

<!-- نص طويل -->
<textarea name="msg" rows="5"></textarea>`}
              />
            </div>
            <div>
              <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>التحقق والتجميع:</p>
              <CodeBlock
                language="html"
                code={`<!-- label (إلزامي) -->
<label for="id">التسمية</label>
<input type="text" id="id" name="n" />

<!-- التحقق -->
<input required minlength="3" maxlength="50" />
<input type="number" min="0" max="100" />
<input pattern="[A-Za-z]{3}" />

<!-- القوائم -->
<select name="x">
  <option value="1">أحد</option>
</select>

<!-- المجموعات -->
<fieldset>
  <legend>عنوان</legend>
  <!-- حقول -->
</fieldset>`}
              />
            </div>
          </div>
        </CheatSheet>

        {/* ========================================== */}
        {/* التنقل */}
        {/* ========================================== */}
        <LessonNavigation
          prevLesson={lessonInfo.prevLesson}
          prevStage={lessonInfo.prevLessonStage}
          nextLesson={lessonInfo.nextLesson}
          nextStage={lessonInfo.nextLessonStage}
        />
      </div>
    </div>
  );
}
