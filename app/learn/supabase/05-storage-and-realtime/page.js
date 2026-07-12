import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import LessonHeader from "@/components/LessonHeader";
import LessonNavigation from "@/components/LessonNavigation";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import CheatSheet from "@/components/CheatSheet";
import { getLessonBySlug } from "@/data/curriculum";

export default function StorageAndRealtime() {
  const lesson = getLessonBySlug("supabase", "05-storage-and-realtime");

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LessonHeader
        stage={lesson.stage}
        lesson={lesson}
        lessonIndex={lesson.lessonIndex}
        totalLessons={lesson.totalLessons}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">

        {/* ==================== PART A: STORAGE ==================== */}

        <LessonSection id="what-is-storage" title="ما هو Supabase Storage">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Supabase Storage هو نظام تخزين مبني على تقنية <strong className="text-gray-900 dark:text-white">S3-compatible object storage</strong> يوفر لك تخزين الملفات مباشرة داخل مشروعك مع التكامل الكامل مع قاعدة البيانات ونظام التحكم في الوصول (RLS).
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <h4 className="text-blue-800 dark:text-blue-300 font-semibold mb-2">
              لماذا Supabase Storage؟
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">&#10003;</span>
                <span><strong className="text-gray-900 dark:text-white">CDN مدمج:</strong> أكثر من 285 مدينة حول العالم لتقديم الملفات بسرعة فائقة</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">&#10003;</span>
                <span><strong className="text-gray-900 dark:text-white">تحويل الصور on-the-fly:</strong> تغيير الحجم والشكل بدون معالجة مسبقة</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">&#10003;</span>
                <span><strong className="text-gray-900 dark:text-white">تكامل RLS:</strong> نفس نظام التحكم في الوصول المستخدم في قاعدة البيانات</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">&#10003;</span>
                <span><strong className="text-gray-900 dark:text-white">دعم جميع الأنواع:</strong> صور، فيديو، مستندات، وأي نوع ملف آخر</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            يتكامل Storage بشكل سلس مع باقي خدمات Supabase. يمكنك استخدام RLS لتحديد من يقرأ ومن يكتب الملفات، واستخدام Realtime لإشعار المستخدمين عند رفع ملف جديد، وكل ذلك بدون بناء خادم خارجي.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <h4 className="text-gray-900 dark:text-white font-semibold mb-2">
              الهيكل الأساسي لـ Storage
            </h4>
            <div className="text-center text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <div className="bg-white dark:bg-gray-700 rounded p-2 font-mono">
                Supabase Project
              </div>
              <div>&#8595;</div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-green-100 dark:bg-green-900/30 rounded p-2">
                  Buckets
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded p-2">
                  Files
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded p-2">
                  Policies
                </div>
              </div>
            </div>
          </div>
        </LessonSection>

        <LessonSection id="create-bucket" title="إنشاء Bucket">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الـ Bucket هو حاوية الملفات في Supabase Storage. كل ملف يجب أن يكون داخل bucket معين. يمكنك إنشاء الـ buckets إما عبر JavaScript أو SQL مباشرة.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            الطريقة الأولى هي استخدام JavaScript Client:
          </p>

          <CodeBlock
            language="typescript"
            code={`// إنشاء bucket للصور الشخصية
const { data, error } = await supabase.storage.createBucket('avatars', {
  public: true,
  allowedMimeTypes: ['image/*'],
  fileSizeLimit: '1MB',
})

if (error) {
  console.error('خطأ في إنشاء الـ bucket:', error.message)
}`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            الطريقة الثانية هي استخدام SQL مباشرة من Supabase Dashboard أو مكتبة <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">sql</code>:
          </p>

          <CodeBlock
            language="sql"
            code={`INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true);`}
          />

          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <h4 className="text-yellow-800 dark:text-yellow-300 font-semibold mb-2">
              Public vs Private Buckets
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-green-200 dark:border-green-800">
                <h5 className="text-green-700 dark:text-green-400 font-semibold mb-1">
                  Public Bucket
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  أي شخص لديه الرابط يمكنه قراءة الملفات
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  استخدامات: صور الملفات الشخصية، صور المدونة، الأيقونات العامة
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-red-200 dark:border-red-800">
                <h5 className="text-red-700 dark:text-red-400 font-semibold mb-1">
                  Private Bucket
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  يتطلب المصادقة وRLS للوصول للملفات
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  استخدامات: مستندات المستخدم، الفواتير، الملفات الحساسة
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            يمكنك تحديد الأنواع المسموح بها وحد أقصى لحجم الملف عند إنشاء الـ bucket:
          </p>

          <CodeBlock
            language="typescript"
            code={`// إنشاء bucket خاص للمستندات
const { data, error } = await supabase.storage.createBucket('documents', {
  public: false,
  allowedMimeTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
  fileSizeLimit: '10MB',
})`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            يمكنك إدارة الـ buckets الموجودة باستخدام الدوال التالية:
          </p>

          <CodeBlock
            language="typescript"
            code={`// قائمة جميع الـ buckets
const { data: buckets, error } = await supabase.storage.listBuckets()

// معلومات bucket محدد
const { data: bucket, error } = await supabase.storage.getBucket('avatars')

// حذف bucket
const { data, error } = await supabase.storage.deleteBucket('avatars')

// تحديث bucket
const { data, error } = await supabase.storage.updateBucket('avatars', {
  public: false,
  fileSizeLimit: '2MB',
})`}
          />
        </LessonSection>

        <LessonSection id="upload-files" title="رفع الملفات">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            رفع الملفات إلى Supabase Storage بسيط باستخدام دالة <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">upload</code>. يمكنك رفع ملف من المتصفح مباشرة أو من الخادم.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            رفع ملف من نموذج في المتصفح:
          </p>

          <CodeBlock
            language="typescript"
            code={`// رفع صورة شخصية
const file = event.target.files[0]

const { data, error } = await supabase.storage
  .from('avatars')
  .upload('user-id/profile.jpg', file, {
    contentType: 'image/jpeg',
  })

if (error) {
  console.error('خطأ في الرفع:', error.message)
} else {
  console.log('تم الرفع بنجاح:', data.path)
}`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            رفع ملف بمسار مخصص باستخدام معرّف المستخدم:
          </p>

          <CodeBlock
            language="typescript"
            code={`// رفع مستند مع مسار ديناميكي
const { data, error } = await supabase.storage
  .from('documents')
  .upload(\`user-\${userId}/report.pdf\`, file)

// رفع مع تاريخ لتجنب التعارض
const filePath = \`\${userId}/\${Date.now()}-report.pdf\`
const { data, error } = await supabase.storage
  .from('documents')
  .upload(filePath, file)`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            رفع مع تحديث للملفات الموجودة ( Upsert ):
          </p>

          <CodeBlock
            language="typescript"
            code={`// Upsert: رفع أو تحديث إذا كان الملف موجوداً
const { data, error } = await supabase.storage
  .from('avatars')
  .upload('user-id/profile.jpg', file, {
    contentType: 'image/jpeg',
    upsert: true,
  })`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            يمكنك متابعة تقدم الرفع باستخدام options المتقدمة:
          </p>

          <CodeBlock
            language="typescript"
            code={`// رفع مع تشفير وتحديد الكاش
const { data, error } = await supabase.storage
  .from('avatars')
  .upload('user-id/profile.jpg', file, {
    contentType: 'image/jpeg',
    cacheControl: '3600',
    upsert: false,
  })`}
          />
        </LessonSection>

        <LessonSection id="download-files" title="تحميل الملفات">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Supabase Storage يوفر عدة طرق للحصول على الملفات: روابط عامة، تحميل مباشر، وروابط مؤقتة موقّعة. كل طريقة تناسب حالة استخدام مختلفة.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
           获取 الرابط العام للملف (للـ buckets العامة فقط):
          </p>

          <CodeBlock
            language="typescript"
            code={`// الحصول على رابط عام - يعمل فقط للـ buckets العامة
const { data } = supabase.storage
  .from('avatars')
  .getPublicUrl('user-id/profile.jpg')

console.log(data.publicUrl)
// https://xxxxx.supabase.co/storage/v1/object/public/avatars/user-id/profile.jpg`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            تحميل الملف مباشرة (للـ buckets الخاصة):
          </p>

          <CodeBlock
            language="typescript"
            code={`// تحميل ملف - يتطلب المصادقة للـ buckets الخاصة
const { data, error } = await supabase.storage
  .from('documents')
  .download('user-id/report.pdf')

if (error) {
  console.error('خطأ في التحميل:', error.message)
} else {
  // data هو Blob للملف
  const url = URL.createObjectURL(data)
  const a = document.createElement('a')
  a.href = url
  a.download = 'report.pdf'
  a.click()
}`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            إنشاء رابط موقّع (Signed URL) وصول مؤقت:
          </p>

          <CodeBlock
            language="typescript"
            code={`// إنشاء signed URL لمدة ساعة واحدة (3600 ثانية)
const { data, error } = await supabase.storage
  .from('documents')
  .createSignedUrl('user-id/report.pdf', 3600)

if (data) {
  console.log('الرابط الصالح لمدة ساعة:', data.signedUrl)
}

// إنشاء signed URL مع تحديد المسار
const { data, error } = await supabase.storage
  .from('documents')
  .createSignedUrls(['file1.pdf', 'file2.pdf'], 3600)`}
          />

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-4">
            <h4 className="text-green-800 dark:text-green-300 font-semibold mb-2">
              متى نستخدم كل طريقة؟
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <strong className="text-gray-900 dark:text-white">getPublicUrl:</strong> للملفات العامة كالصور الشخصية والصور المصغرة
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">download:</strong> لتحميل ملفات مباشرة في المتصفح (PDF، مستندات)
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">createSignedUrl:</strong> لمشاركة ملفات خاصة بشكل مؤقت مع أشخاص محددين
              </li>
            </ul>
          </div>
        </LessonSection>

        <LessonSection id="delete-and-list" title="حذف وقائمة الملفات">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            إدارة الملفات تشمل الحذف والبحث والنقل والنسخ. هذه العمليات الأساسية لإدارة أي نظام تخزين.
          </p>

          <CodeBlock
            language="typescript"
            code={`// حذف ملف محدد
const { data, error } = await supabase.storage
  .from('avatars')
  .remove(['user-id/profile.jpg'])

if (error) {
  console.error('خطأ في الحذف:', error.message)
}`}
          />

          <CodeBlock
            language="typescript"
            code={`// حذف عدة ملفات دفعة واحدة
const { data, error } = await supabase.storage
  .from('documents')
  .remove([
    'user-123/file1.pdf',
    'user-123/file2.pdf',
    'user-123/file3.pdf',
  ])`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            عرض قائمة الملفات في مسار محدد:
          </p>

          <CodeBlock
            language="typescript"
            code={`// قائمة الملفات في مجلد محدد
const { data, error } = await supabase.storage
  .from('avatars')
  .list('user-id/')

if (data) {
  data.forEach(file => {
    console.log(\`الملف: \${file.name}, الحجم: \${file.metadata.size}\`)
  })
}

// قائمة مع فلترة وترتيب
const { data, error } = await supabase.storage
  .from('documents')
  .list('user-123/', {
    limit: 10,
    offset: 0,
    sortBy: { column: 'created_at', order: 'desc' },
  })`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            نقل ونسخ الملفات:
          </p>

          <CodeBlock
            language="typescript"
            code={`// نقل ملف
const { data, error } = await supabase.storage
  .from('avatars')
  .move('old-path/profile.jpg', 'new-path/profile.jpg')

// نسخ ملف
const { data, error } = await supabase.storage
  .from('avatars')
  .copy('source/profile.jpg', 'destination/profile.jpg')`}
          />
        </LessonSection>

        <LessonSection id="storage-rls" title="RLS للتخزين">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Supabase Storage يدعم <strong className="text-gray-900 dark:text-white">Row Level Security (RLS)</strong> بشكل كامل. يمكنك كتابة سياسات تحديد من يمكنه رفع وقراءة وحذف الملفات. الـ policies تُطبق على الـ bucket objects في جدول <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">storage.objects</code>.
          </p>

          <CodeBlock
            language="sql"
            code={`-- السماح للمستخدم برفع صورته الشخصية فقط
CREATE POLICY "Avatar upload" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'avatars'
  AND (storage.foldername(name))[1] = auth.uid()::text
);`}
          />

          <CodeBlock
            language="sql"
            code={`-- أي شخص يمكنه قراءة الصور الشخصية (bucket عام)
CREATE POLICY "Avatar public read" ON storage.objects
FOR SELECT USING (bucket_id = 'avatars');`}
          />

          <CodeBlock
            language="sql"
            code={`-- حماية المستندات: كل مستخدم يقرأ ملفاته فقط
CREATE POLICY "Documents read own" ON storage.objects
FOR SELECT USING (
  bucket_id = 'documents'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

-- حذف المستندات الخاصة بالمستخدم
CREATE POLICY "Documents delete own" ON storage.objects
FOR DELETE USING (
  bucket_id = 'documents'
  AND (storage.foldername(name))[1] = auth.uid()::text
);`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-4">
            يمكنك استخدام دالة <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">storage.foldername(name)</code> لاستخراج أسماء المجلدات من مسار الملف. هذه الدالة تُرجع مصفوفة بأسماء المجلدات الفرعية.
          </p>

          <CodeBlock
            language="sql"
            code={`-- سياسة متقدمة: السماح بالقراءة للملفات العامة والملفات الخاصة بصاحبها
CREATE POLICY "Advanced read policy" ON storage.objects
FOR SELECT USING (
  bucket_id = 'documents'
  AND (
    -- الملفات العامة
    (storage.foldername(name))[1] = 'public'
    OR
    -- ملفات المستخدم الخاصة
    (storage.foldername(name))[1] = auth.uid()::text
  )
);`}
          />
        </LessonSection>

        <LessonSection id="image-transforms" title="تحويل الصور (Image Transforms)">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Supabase Storage يوفر تحويل الصور on-the-fly مما يeliminates الحاجة لمعالجة الصور مسبقة. يمكنك تغيير الحجم والشكل مباشرة عند طلب الصورة.
          </p>

          <CodeBlock
            language="typescript"
            code={`// الحصول على صورة محولة بحجم محدد
const { data } = supabase.storage
  .from('images')
  .getPublicUrl('photo.jpg', {
    transform: {
      width: 300,
      height: 200,
      resize: 'cover',
    },
  })

console.log(data.publicUrl)
// الرابط يُرجع صورة بحجم 300x200 مع cover`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            أنماط التحويل المتاحة:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-white dark:bg-gray-700 rounded p-3">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">cover</h5>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  يملأ المنطقة بالكامل مع قص الزوايا غير المناسبة
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded p-3">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">contain</h5>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  يحافظ على النسبة مع إضافة أجزاء فارغة إذا لزم الأمر
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded p-3">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">fill</h5>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  يملأ المنطقة بالكامل مع تشويه النسبة إذا لزم الأمر
                </p>
              </div>
            </div>
          </div>

          <CodeBlock
            language="typescript"
            code={`// إنشاء صور مصغرة للقائمة
function getThumbnailUrl(imagePath: string) {
  const { data } = supabase.storage
    .from('images')
    .getPublicUrl(imagePath, {
      transform: {
        width: 150,
        height: 150,
        resize: 'cover',
      },
    })
  return data.publicUrl
}

// إنشاء صورة للعرض التفصيلي
function getDetailUrl(imagePath: string) {
  const { data } = supabase.storage
    .from('images')
    .getPublicUrl(imagePath, {
      transform: {
        width: 800,
        height: 600,
        resize: 'contain',
      },
    })
  return data.publicUrl
}`}
          />

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mt-4">
            <h4 className="text-purple-800 dark:text-purple-300 font-semibold mb-2">
              ملاحظة مهمة
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              التحويلات تعمل فقط مع الـ <strong>buckets العامة</strong>. إذا كنت تحتاج تحويلات لـ buckets خاصة، يجب عليك استخدام signed URL مع التحويلات، أو معالجة الصور مسبقة قبل الرفع.
            </p>
          </div>
        </LessonSection>

        {/* ==================== PART B: REALTIME ==================== */}

        <LessonSection id="what-is-realtime" title="ما هو Realtime">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Supabase Realtime هو نظام يتيح لك الاستماع للتغييرات في الوقت الفعلي على قاعدة البيانات والاتصال بالمستخدمين الآخرين. يعتمد على <strong className="text-gray-900 dark:text-white">Postgres logical replication</strong> مما يعني أنه لا يحتاج إلى بنية تحتية إضافية.
          </p>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 mb-4">
            <h4 className="text-indigo-800 dark:text-indigo-300 font-semibold mb-3">
              ثلاثة أنواع من Realtime
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white dark:bg-gray-800 rounded p-3 border border-indigo-200 dark:border-indigo-700">
                <h5 className="text-indigo-700 dark:text-indigo-400 font-semibold text-sm mb-1">
                  Database Changes
                </h5>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  استماع لتغييرات INSERT و UPDATE وDELETE في جداول قاعدة البيانات
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded p-3 border border-indigo-200 dark:border-indigo-700">
                <h5 className="text-indigo-700 dark:text-indigo-400 font-semibold text-sm mb-1">
                  Broadcast
                </h5>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  إرسال واستقبال رسائل فورية بين المستخدمين بدون حفظ في قاعدة البيانات
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded p-3 border border-indigo-200 dark:border-indigo-700">
                <h5 className="text-indigo-700 dark:text-indigo-400 font-semibold text-sm mb-1">
                  Presence
                </h5>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  معرفة من متصل حالياً ومشاركة حالة المستخدم مع الآخرين
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            استخدامات Realtime الشائعة تشمل:
          </p>

          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>تطبيقات الدردشة والرسائل الفورية</li>
            <li>إشعارات حية عند حدث جديد</li>
            <li>التحرير التعاوني على المستندات</li>
            <li>لوحة تحكم تعرض بيانات حية</li>
            <li>تطبيقات الألعاب المتعددة اللاعبين</li>
          </ul>
        </LessonSection>

        <LessonSection id="database-subscription" title="الاشتراك في تغييرات قاعدة البيانات">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            يمكنك الاستماع لأي تغيير يحدث في جدول معين في الوقت الفعلي. هذه الميزة مفيدة جداً لتحديث الواجهة تلقائياً عند إضافة أو تعديل أو حذف بيانات.
          </p>

          <CodeBlock
            language="typescript"
            code={`// الاستماع لجميع التغييرات على جدول posts
const channel = supabase
  .channel('posts-changes')
  .on('postgres_changes',
    { event: '*', schema: 'public', table: 'posts' },
    (payload) => {
      console.log('التغيير:', payload.eventType, payload.new)
    }
  )
  .subscribe()`}
          />

          <CodeBlock
            language="typescript"
            code={`// الاستماع لإضافة منشور جديد فقط
const channel = supabase
  .channel('new-posts')
  .on('postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'posts' },
    (payload) => {
      console.log('منشور جديد:', payload.new)
      // تحديث واجهة المستخدم بالمنشور الجديد
      addNewPost(payload.new)
    }
  )
  .subscribe()`}
          />

          <CodeBlock
            language="typescript"
            code={`// الاستماع لعدة جداول في نفس الـ channel
const channel = supabase
  .channel('db-changes')
  .on('postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'posts' },
    (payload) => console.log('منشور جديد:', payload.new)
  )
  .on('postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'comments' },
    (payload) => console.log('تعليق جديد:', payload.new)
  )
  .on('postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'likes' },
    (payload) => console.log('تحديث إعجاب:', payload.new)
  )
  .subscribe()`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            يمكنك فلترة التغييرات باستخدام filter:
          </p>

          <CodeBlock
            language="typescript"
            code={`// الاستماع لتغييرات محددة فقط
const channel = supabase
  .channel('user-posts')
  .on('postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'posts',
      filter: \`author_id=eq.\${userId}\`,
    },
    (payload) => {
      console.log('تغيير في منشوراتك:', payload)
    }
  )
  .subscribe()`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            التخلص من الاشتراك عند عدم الحاجة:
          </p>

          <CodeBlock
            language="typescript"
            code={`// إلغاء الاشتراك من channel محدد
supabase.removeChannel(channel)

// إلغاء جميع الاشتراكات
supabase.removeAllChannels()`}
          />
        </LessonSection>

        <LessonSection id="broadcast" title="Broadcast - إرسال رسائل فورية">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Broadcast يتيح لك إرسال رسائل فورية مباشرة بين المستخدمين المتصلين بنفس الـ channel. هذه الرسائل لا تُحفظ في قاعدة البيانات وتصل فقط للمستخدمين المتصلين حالياً.
          </p>

          <CodeBlock
            language="typescript"
            code={`// إرسال رسالة broadcast
const channel = supabase.channel('room1')

// إرسال حدث حركة الماوس
channel.send({
  type: 'broadcast',
  event: 'cursor-move',
  payload: { x: 100, y: 200 },
})`}
          />

          <CodeBlock
            language="typescript"
            code={`// استقبال رسائل broadcast
const channel = supabase.channel('room1')

channel.on('broadcast', { event: 'cursor-move' }, (payload) => {
  console.log('موقع الماوس:', payload.payload)
  // تحديث موقع مؤشر المستخدم الآخر
  updateCursorPosition(payload.payload.x, payload.payload.y)
})

channel.subscribe()`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            مثال عملي: نظام مؤشرات حية للتعاون على التحرير:
          </p>

          <CodeBlock
            language="typescript"
            code={`// مكون للتحرير التعاوني مع مؤشرات حية
function CollaborativeEditor({ documentId, userId }) {
  const [cursors, setCursors] = useState({})
  const channel = supabase.channel(\`doc-\${documentId}\`)

  useEffect(() => {
    // استقبال حركة المؤشرات من المستخدمين الآخرين
    channel
      .on('broadcast', { event: 'cursor-move' }, (payload) => {
        setCursors(prev => ({
          ...prev,
          [payload.payload.userId]: {
            x: payload.payload.x,
            y: payload.payload.y,
            color: payload.payload.color,
          }
        }))
      })
      .on('broadcast', { event: 'cursor-leave' }, (payload) => {
        setCursors(prev => {
          const next = { ...prev }
          delete next[payload.payload.userId]
          return next
        })
      })
      .subscribe()

    return () => {
      channel.send({
        type: 'broadcast',
        event: 'cursor-leave',
        payload: { userId },
      })
      supabase.removeChannel(channel)
    }
  }, [documentId])

  // إرسال موقع المؤشر عند التحرير
  const handleMouseMove = (e) => {
    channel.send({
      type: 'broadcast',
      event: 'cursor-move',
      payload: {
        userId,
        x: e.clientX,
        y: e.clientY,
        color: getUserColor(userId),
      },
    })
  }

  return (
    <div onMouseMove={handleMouseMove}>
      {/* عرض المؤشرات */}
      {Object.entries(cursors).map(([id, pos]) => (
        <div
          key={id}
          className="absolute pointer-events-none"
          style={{
            left: pos.x,
            top: pos.y,
            backgroundColor: pos.color,
          }}
        >
          <span className="text-xs text-white bg-black px-1 rounded">
            {id}
          </span>
        </div>
      ))}
    </div>
  )
}`}
          />
        </LessonSection>

        <LessonSection id="presence" title="Presence - معرفة من متصل">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Presence يتيح لك معرفة أي المستخدمين متصلين حالياً ومشاركة معلومات الحالة معهم. يتم تحديث تلقائياً عند اتصال أو انقطاع المستخدمين.
          </p>

          <CodeBlock
            language="typescript"
            code={`// إعداد Presence لمعرفة المستخدمين المتصلين
const channel = supabase.channel('online-users')

// الاستماع لتغيرات الحالة
channel.on('presence', { event: 'sync' }, () => {
  const state = channel.presenceState()
  console.log('المستخدمون المتصلون:', state)
})

channel.on('presence', { event: 'join' }, ({ key, newPresences }) => {
  console.log('انضم:', key, newPresences)
})

channel.on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
  console.log('غادر:', key, leftPresences)
})`}
          />

          <CodeBlock
            language="typescript"
            code={`// تتبع حالة المستخدم الحالي
channel.subscribe(async (status) => {
  if (status === 'SUBSCRIBED') {
    await channel.track({
      user_id: userId,
      user_name: userName,
      user_avatar: userAvatar,
      online_at: new Date().toISOString(),
      status: 'online',
    })
  }
})`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            مثال عملي: قائمة المستخدمين المتصلين في غرفة دردشة:
          </p>

          <CodeBlock
            language="typescript"
            code={`// مكون قائمة المستخدمين المتصلين
function OnlineUsers({ roomId, currentUser }) {
  const [onlineUsers, setOnlineUsers] = useState([])
  const channel = supabase.channel(\`room-\${roomId}\`)

  useEffect(() => {
    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState()
        const users = Object.values(state).flat()
        setOnlineUsers(users)
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({
            user_id: currentUser.id,
            user_name: currentUser.name,
            user_avatar: currentUser.avatar,
            online_at: new Date().toISOString(),
          })
        }
      })

    return () => {
      supabase.removeChannel(channel)
    }
  }, [roomId, currentUser.id])

  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold mb-3">
        متصلون الآن ({onlineUsers.length})
      </h3>
      <div className="space-y-2">
        {onlineUsers.map((user) => (
          <div key={user.user_id} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <img
              src={user.user_avatar}
              className="w-6 h-6 rounded-full"
              alt={user.user_name}
            />
            <span>{user.user_name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`}
          />
        </LessonSection>

        <LessonSection id="realtime-example" title="مثال عملي - مكون Realtime كامل">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            لنبناء مكون يعرض تحديثات المنشورات بشكل حي. هذا المثال يجمع بين Database Changes و UI لتحديث تلقائي وسلس.
          </p>

          <CodeBlock
            language="typescript"
            code={`'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// مكون عرض المنشورات مع التحديث الحي
export function LivePostsFeed() {
  const [posts, setPosts] = useState([])
  const [notifications, setNotifications] = useState([])

  // جلب المنشورات الأولية
  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20)

      if (data) {
        setPosts(data)
      }
    }
    fetchPosts()
  }, [])

  // الاشتراك في التغييرات الحية
  useEffect(() => {
    const channel = supabase
      .channel('live-posts')
      .on('postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'posts' },
        (payload) => {
          // إضافة المنشور الجديد في أعلى القائمة
          setPosts(prev => [payload.new, ...prev])

          // إظهار إشعار
          setNotifications(prev => [
            ...prev,
            {
              id: Date.now(),
              message: \`منشور جديد: \${payload.new.title}\`,
              type: 'info',
            }
          ])

          // إزالة الإشعار بعد 5 ثوانٍ
          setTimeout(() => {
            setNotifications(prev =>
              prev.filter(n => n.id !== Date.now())
            )
          }, 5000)
        }
      )
      .on('postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'posts' },
        (payload) => {
          setPosts(prev =>
            prev.map(post =>
              post.id === payload.new.id ? payload.new : post
            )
          )
        }
      )
      .on('postgres_changes',
        { event: 'DELETE', schema: 'public', table: 'posts' },
        (payload) => {
          setPosts(prev =>
            prev.filter(post => post.id !== payload.old.id)
          )
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* شريط الإشعارات */}
      <div className="fixed top-4 left-4 right-4 z-50 space-y-2">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg
                       shadow-lg animate-slide-down"
          >
            {notif.message}
          </div>
        ))}
      </div>

      {/* قائمة المنشورات */}
      <div className="space-y-4">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow p-4 border
                       border-gray-200 hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-900">
              {post.title}
            </h2>
            <p className="text-gray-600 mt-2">{post.content}</p>
            <div className="flex items-center gap-4 mt-3 text-sm
                            text-gray-500">
              <span>{post.author_name}</span>
              <span>{new Date(post.created_at).toLocaleDateString('ar')}</span>
              <span>{post.likes_count} إعجاب</span>
            </div>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          لا توجد منشورات بعد. كن أول من ينشر!
        </div>
      )}
    </div>
  )
}`}
          />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 mt-4">
            دمج Realtime مع Presence لمعرفة من يقرأ المنشور حالياً:
          </p>

          <CodeBlock
            language="typescript"
            code={`// مكون يعرض من يقرأ المنشور حالياً
function PostReaders({ postId }) {
  const [readers, setReaders] = useState([])
  const channel = supabase.channel(\`post-\${postId}-readers\`)

  useEffect(() => {
    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState()
        const allReaders = Object.values(state).flat()
        setReaders(allReaders)
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({
            user_id: currentUser.id,
            user_name: currentUser.name,
            reading_at: new Date().toISOString(),
          })
        }
      })

    return () => {
      supabase.removeChannel(channel)
    }
  }, [postId, currentUser.id])

  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <span>يقرأ الآن:</span>
      <div className="flex -space-x-2">
        {readers.slice(0, 5).map((reader) => (
          <img
            key={reader.user_id}
            src={reader.user_avatar}
            className="w-6 h-6 rounded-full border-2 border-white"
            alt={reader.user_name}
            title={reader.user_name}
          />
        ))}
        {readers.length > 5 && (
          <span className="text-xs text-gray-500 ml-2">
            +{readers.length - 5} آخرون
          </span>
        )}
      </div>
    </div>
  )
}`}
          />
        </LessonSection>

        {/* ==================== SECTION 13: SUMMARY + QUIZ + CHALLENGE + CHEATSHEET ==================== */}

        <LessonSection id="summary" title="ملخص الدرس">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            في هذا الدرس تعلمنا كيفية استخدام Supabase Storage و Realtime لبناء تطبيقات تفاعلية و动态. إليك ملخص أهم النقاط:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="text-blue-800 dark:text-blue-300 font-semibold mb-2">
                التخزين (Storage)
              </h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>- Buckets: حاويات الملفات العامة والخاصة</li>
                <li>- Upload/Download: رفع وتحميل الملفات</li>
                <li>- Signed URLs: روابط مؤقتة للملفات الخاصة</li>
                <li>- RLS: سياسات أمان التخزين</li>
                <li>- Image Transforms: تحويل الصور on-the-fly</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h4 className="text-purple-800 dark:text-purple-300 font-semibold mb-2">
                الوقت الفعلي (Realtime)
              </h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>- Database Changes: استماع لتغييرات الجداول</li>
                <li>- Broadcast: رسائل فورية بين المستخدمين</li>
                <li>- Presence: معرفة المتصلين وحالتهم</li>
                <li>- Subscriptions: إلغاء الاشتراك عند الحاجة</li>
                <li>- Real-time UI: تحديث الواجهة تلقائياً</li>
              </ul>
            </div>
          </div>
        </LessonSection>

        <LessonSection id="quiz" title="اختبر معلوماتك">
          <Quiz
            question="أي من التالي يُستخدم للحصول على رابط مؤقت لملف في bucket خاص؟"
            options={[
              "getPublicUrl()",
              "download()",
              "createSignedUrl()",
              "getSignedUrl()",
            ]}
            correctAnswer={2}
            explanation={`الإجابة الصحيحة هي createSignedUrl() - هذه الدالة تُنشئ رابطاً مؤقتاً صالحاً لمدة محددة للوصول لملف في bucket خاص. getPublicUrl() تعمل فقط مع الـ buckets العامة، وdownload() تحمل الملف مباشرة.`}
          />

          <div className="mt-6">
            <Quiz
              question="ما هو نوع Realtime الذي يُستخدم لمعرفة أي المستخدمين متصلين حالياً؟"
              options={[
                "Database Changes",
                "Broadcast",
                "Presence",
                "Subscription",
              ]}
              correctAnswer={2}
              explanation={`الإجابة الصحيحة هي Presence - يُستخدم Presence لتتبع المستخدمين المتصلين ومشاركتهم معلومات الحالة مثل الاسم والصورة ووقت الاتصال. Database Changes للتغييرات في الجداول، وBroadcast للرسائل الفورية.`}
            />
          </div>

          <div className="mt-6">
            <Quiz
              question="كيف تحذف ملفاً من Supabase Storage؟"
              options={[
                "await supabase.storage.from('bucket').delete('path')",
                "await supabase.storage.from('bucket').remove(['path'])",
                "await supabase.storage.delete('bucket', 'path')",
                "await supabase.storage.from('bucket').destroy('path')",
              ]}
              correctAnswer={1}
              explanation={`الدالة الصحيحة هي remove() مع مصفوفة من المسارات: await supabase.storage.from('bucket').remove(['path']). يمكنك تمرير مصفوفة بعدة مسارات لحذف عدة ملفات في نفس الوقت.`}
            />
          </div>

          <div className="mt-6">
            <Quiz
              question="أي خاصية من Supabase Storage تسمح بتغيير حجم الصورة عند طلبها؟"
              options={[
                "Image Resizing",
                "Image Transforms",
                "Image Optimization",
                "Image CDN",
              ]}
              correctAnswer={1}
              explanation={`Image Transforms هي الخاصية التي تسمح بتحويل الصور on-the-fly باستخدام getPublicUrl مع options التحويل. يمكنك تحديد العرض والارتفاع ونمط التحويل (cover, contain, fill) مباشرة عند طلب الصورة.`}
            />
          </div>
        </LessonSection>

        <LessonSection id="challenge" title="تحدي الدرس">
          <Challenge
            title="نظام رفع الصور الشخصية مع إشعارات حية"
            description={`أنشئ نظاماً كاملاً يتضمن:
1. نموذج رفع صورة شخصية (avatar) مع:
   - bucket اسمه avatars مع RLS يسمح لكل مستخدم برفع صورته فقط
   - دعم upsert لتحديث الصورة الشخصية
   - عرض معاينة قبل الرفع
   - شريط تقدم أثناء الرفع

2. صفحة المنشورات مع:
   - جلب وعرض المنشورات من قاعدة البيانات
   - اشتراك في Realtime لعرض أي منشور جديد تلقائياً
   - إشعار toast يظهر عند إضافة منشور جديد
   - عرض صورة الكاتب الشخصية من Storage

3. استخدام RLS للتخزين:
   - سياسة رفع: كل مستخدم يرفع في مجلده فقط
   - سياسة قراءة: أي شخص يقرأ الصور الشخصية
   - سياسة حذف: المستخدم يحذف صورته فقط

4. مكون Presence يعرض عدد القراء النشطين للصفحة`}
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong className="text-gray-900 dark:text-white">المتطلبات:</strong>
              </p>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>- إنشاء bucket avatars عبر JavaScript أو SQL</li>
                <li>- كتابة سياسات RLS للتخزين</li>
                <li>- بناء نموذج رفع مع معاينة وشريط تقدم</li>
                <li>- اشتراك Realtime على جدول posts</li>
                <li>- استخدام Presence لتتبع المستخدمين النشطين</li>
                <li>- معالجة الأخطاء بشكل مناسب</li>
              </ul>
            </div>
          </Challenge>
        </LessonSection>

        <LessonSection id="cheatsheet" title="ملخص مرجعي سريع">
          <CheatSheet title="Supabase Storage + Realtime - المرجع الكامل">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  إنشاء Bucket
                </h4>
                <CodeBlock
                  language="typescript"
                  code={`// عام
await supabase.storage.createBucket('name', { public: true })

// خاص
await supabase.storage.createBucket('name', {
  public: false,
  allowedMimeTypes: ['image/*'],
  fileSizeLimit: '1MB',
})

// SQL
INSERT INTO storage.buckets (id, name, public)
VALUES ('name', 'name', true);`}
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  رفع وتحميل الملفات
                </h4>
                <CodeBlock
                  language="typescript"
                  code={`// رفع
await supabase.storage.from('bucket').upload('path', file)

// رفع مع upsert
await supabase.storage.from('bucket').upload('path', file, { upsert: true })

// رابط عام
supabase.storage.from('bucket').getPublicUrl('path')

// تحميل
await supabase.storage.from('bucket').download('path')

// رابط موقّع
await supabase.storage.from('bucket').createSignedUrl('path', 3600)`}
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  إدارة الملفات
                </h4>
                <CodeBlock
                  language="typescript"
                  code={`// حذف
await supabase.storage.from('bucket').remove(['path'])

// قائمة
await supabase.storage.from('bucket').list('folder/')

// نقل
await supabase.storage.from('bucket').move('old', 'new')

// نسخ
await supabase.storage.from('bucket').copy('src', 'dest')`}
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  تحويل الصور
                </h4>
                <CodeBlock
                  language="typescript"
                  code={`const { data } = supabase.storage
  .from('images')
  .getPublicUrl('photo.jpg', {
    transform: {
      width: 300,
      height: 200,
      resize: 'cover', // cover | contain | fill
    },
  })`}
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  RLS للتخزين
                </h4>
                <CodeBlock
                  language="sql"
                  code={`-- رفع للمستخدم فقط
CREATE POLICY "upload" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'bucket'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

-- قراءة عامة
CREATE POLICY "read" ON storage.objects
FOR SELECT USING (bucket_id = 'bucket');`}
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Database Changes
                </h4>
                <CodeBlock
                  language="typescript"
                  code={`const channel = supabase
  .channel('changes')
  .on('postgres_changes',
    { event: '*', schema: 'public', table: 'table' },
    (payload) => console.log(payload)
  )
  .subscribe()`}
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Broadcast
                </h4>
                <CodeBlock
                  language="typescript"
                  code={`// إرسال
channel.send({
  type: 'broadcast',
  event: 'my-event',
  payload: { data: 'hello' },
})

// استقبال
channel.on('broadcast', { event: 'my-event' }, (payload) => {
  console.log(payload.payload)
})`}
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Presence
                </h4>
                <CodeBlock
                  language="typescript"
                  code={`channel.on('presence', { event: 'sync' }, () => {
  const state = channel.presenceState()
  console.log(state)
})

await channel.track({
  user_id: id,
  user_name: name,
  online_at: new Date().toISOString(),
})`}
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  إدارة القنوات
                </h4>
                <CodeBlock
                  language="typescript"
                  code={`// إلغاء اشتراك channel واحد
supabase.removeChannel(channel)

// إلغاء جميع الاشتراكات
supabase.removeAllChannels()`}
                />
              </div>
            </div>
          </CheatSheet>
        </LessonSection>

        <LessonNavigation
          prevLesson={lesson.prevLesson}
          prevStage={lesson.prevLessonStage}
          nextLesson={lesson.nextLesson}
          nextStage={lesson.nextLessonStage}
        />
      </div>
    </div>
  );
}
